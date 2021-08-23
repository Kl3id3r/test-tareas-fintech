describe('Login', () => {
  it('Verificar si redirecciona a login y muestra titulo de bienvenida', () => {
    // Al cargar por primera vez redireccionar a login
    cy.visit('/')
    cy.url().should('includes', 'login')
    // Debe existir titulo con etiqueta h3 que tenga titulo de bienvenida
    cy.contains('h3', 'Bienvenido')
  })

  it('Verificar formulario inactivo', () => {
    // Verificar si el formulario ha sido tocado y está inactivo
    cy.get('form').should('have.class', 'ng-untouched')
  })

  it('No ingresar si el formulario es inválido', () => {
    // Ingresar datos incorrectos
    cy.login('admin', 'admin')
    // Debe mostrar mensaje "Credenciales Inválidas"
    cy.contains('Credenciales Inválidas')
    // Cerrar modal informativo
    cy.get('button.swal2-confirm').click()
    // No debe redireccionar a tareas
    cy.url().should('not.include', 'tareas')
  })

  it('Ingresar si el formulario es válido', () => {
    // Ingresar datos correctos
    cy.login('admin@email.com', 'admin')
    // Debe redireccionar a vista de tareas
    cy.url().should('include', 'tareas')
    // Mostrar mensaje de bienvenida con el nombre de de usuario (Administrador)
    cy.contains('¡Bienvenido Administrador!')
    // Cerrar modal informativo
    cy.wait(500)
    cy.get('button.swal2-confirm').click()
  })

  it('Cerrar sesión', () => {
    cy.get('.btn-closeSession').click();
    cy.wait(500)
    cy.contains('¡Sesión finalizada!')
    cy.get('button.swal2-confirm').click()
  })
})
