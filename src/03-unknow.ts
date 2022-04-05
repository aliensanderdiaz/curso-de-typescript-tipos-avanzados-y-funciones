let unknowVar: unknown;

unknowVar = 'uno'
unknowVar = 1
unknowVar = true

// No me permite realizar esto
// unknowVar.toUpperCase()

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase()
}
