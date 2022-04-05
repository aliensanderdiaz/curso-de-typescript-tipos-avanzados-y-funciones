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
