# Curso de TypeScript: Tipos Avanzados y Funciones

> npm i ts-node

> npx ts-node src/demo.ts

## ENUM

	enum ROLES {
		ADMIN = 'admin',
		SELLER = 'seller',
		CUSTOMER = 'customer'
	}

	type User = {
		username: string,
		role: ROLES
	}

	const alexUser: User = {
		username: 'Alexander',
		role: ROLES.ADMIN
	}

## TUPLAS

Nos sirve para limitar los elementos de un array.

> let user: [string, number]

> user = ['aliensanderdiaz', 33]

> const [username, age] = user

## Unknow

Son similares que any

La diferencia es que necesitamos comprobar su tipo

antes de acceder a una propiedad

o utilizar algún método.

	let unknowVar: unknown;

	unknowVar = 'uno'
	unknowVar = 1
	unknowVar = true

	// No me permite realizar esto
	// unknowVar.toUpperCase()

	if (typeof unknowVar === 'string') {
		unknowVar.toUpperCase()
	}


## never

Se usa cuando una función nunca va a parar de ejecutarse.

No confundir con void, que son funciones sin retorno

## Parámetros opcionales y nullish-coalescing

Para aceptar parametros opcionales basta con 

agregar un signo de interrogación 

despues del nombre del parametro

> isNew?

Solo hay que tener en cuenta que los parametros opcionales

van despues de los parametros obligatorios.

### nullish-coalescing

Es comun que utilicemos `||` cuando queremos 

darle un valor por defecto a una variable

Pero tiene sus fallas cuando evalua 

un cero, el string vacío o un false

para solucionar esto llega `??`

con el cual estamos seguros que solo se evalua 

`undefined` o `null`

## Parámetros por defecto

Cuando queremos tener parametros por defecto

asignamos el valor de una vez en la variable

> isNew: boolean = true

de esta manera cuando no se envie un valor

tendremos `true`

## Parametros rest

Cuando en una función no sabemos cuantos parametros vamos a recibir

podemos usar los rest params `function(..args) {}`

significa que vamos a recibir una cantidad ilimitada de parametros

y podemos acceder a ellos dentro de la función como un array

	export const checkRole = (...roles: ROLES[]) => {
		if (roles.includes(user.role)) {
			return true
		}
		return false
	}

## sobrecarga de funciones: el problema

Cuando en una funcion no tenemos un solo tipo definido de retorno

typescript no puede inferir un tipo adecuado de salida entonces

no nos puede ayudar con los metodos o propiedades que tenga la salida.

	// 'Nico' => ['N', 'i', 'c', 'o'] ==> string => string[]
	// ['N', 'i', 'c', 'o'] => 'Nico' ==> string[] => string

	function parseStr(input: string | string[]): string | string[] {
		if (Array.isArray(input)) {
			return input.join('')
		} else {
			return input.split('')
		}
	}

	let rta1 = parseStr('Nico')
	// rta1.reverse()

	let rta2 = parseStr(['N', 'i', 'c', 'o'])
	// rta2.toLowerCase()

	console.log({
		rta1, rta2
	})

por ejemplo `rta1` es un array, pero nos muestra una advertencia

cuando queremos hacer un metodo propio de array. igual pasa con el 

string `rta2`

## Sobrecarga de funciones: la solución

	export function parseStr(input: string): string[];
	export function parseStr(input: string[]): string;

	export function parseStr(input: unknown): unknown {
		if (Array.isArray(input)) {
			return input.join('')
		} else if (typeof input === 'string') {
			return input.split('')
		}
	}

La solución es sobrecargar las funciones, pero de qué se trata?

antes de declarar la función y todo el contenido de la funcion,

realizamos el tipado tanto de entradas y salidas de la funcion

sin contenido, despues en la funcion como tal, no hay necesidad de

hacer tipado.

Se recomienda no abusar de la sobrecarga de funciones, es decir no

usar cuando no sea necesario.

## interfaces

Funcionan de manera similar a los types, aunque no se pueden hacer

interfaces tan pequeñas. Ademas es común ver mas interfaces porque

se pueden extender.

## Estructuras complejas

En una aplicación llegaríamos a tener estructuras de proyecto e interfaces

muy grandes. Para tener buenas practicas, es necesario dividir

interfaces en interfaces mas pequeñas y que nuestros servicios 

tengan una responsabilidad minima, con el fin de que nuestro codigo

sea mantenible.

## Extender interfaces

Extender interfaces se refiere a herencia, es decir que si tenemos

diferentes interfaces con propiedades en comun.

deberiamos hacer una interfaz base y extender las nueva interfaces

desde esta base.

## Propiedades de solo lectura

con la palabra reservada readonly podemos evitar que se alteren

ciertas propiedades en nuestras interfaces.

## Ejemplo de CRUD

Ordenamos mejor los modelos con relaciones

category, order, product, user

## Omit y Pick Type

Las interfaces son muy estrictos con sus elementos entonces que hacemos cuando

en nuestro CRUD queremos hacer nuestras distintas operaciones, pero no deberiamos

contar con toda la cantidad de datos que se indican en determinada interface

Aparecen un concepto que aprenderemos que son los DTO "Data transfer Object"

estas nuevas interfaces extienden de nuestros modelos, pero quitando o agregando

propiedades y en este proceso de quitar o agregar propiedades aparecen

`OMIT` y `PICK`, para evitar que caigamos en redundancia de codigo.

	export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
		categoryId: string
	}

	export interface exampleDto extends Pick<Product, 'image' | 'description'> {
		
	}
