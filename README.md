# Curso de TypeScript: Tipos Avanzados y Funciones

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
