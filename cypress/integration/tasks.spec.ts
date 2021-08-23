describe('Tareas', () => {
    it('Mostrar lista de tareas', () => {
        cy.login('admin@email.com', 'admin')
        // Debe redireccionar a vista de tareas
        cy.url().should('include', 'tareas')
        // Mostrar mensaje de bienvenida con el nombre de de usuario (Administrador)
        cy.contains('¡Bienvenido Administrador!')
        // Cerrar modal informativo
        cy.get('button.swal2-confirm').click()
        // Mostrar titulo lista de tareas
        cy.contains('LISTA DE TAREAS')
        // Verificar que haya una tarea por defecto
        cy.get('table.mistareas_table tbody tr').should('have.length', 1)
    })

    it('Mostrar formulario para agregar/modificar tarea(s)', () => {
        // Titulo de formulario por defecto "Crear tarea"
        cy.contains('h2', 'Crear tarea')
        cy.get('form').should('have.length', 1)
    })

    it('Cambiar estatus de tarea existente a "Actualizada"', () => {
        // Seleccionar tarea registrada y presionar boton actualizar
        cy.get('table.mistareas_table tbody tr img[alt="Editar"]:first').click()
        // Verificar que hayan 2 botones (Guardar y Cancelar)
        cy.get('div[data-button-actions]').find('button').should('have.length', 2)
        // Mostrar botton Cancelar
        cy.get('div[data-button-actions] button:last').should('have.text', 'Cancelar')
        cy.wait(1000)
        // Seleccionar opcion completada y guardar datos
        cy.get('[formControlName="estatus"]').select('Completada')
        cy.get('button[type="submit"').click()
        // Mosrar mensaje de tarea actualizada luego de 1s
        cy.wait(1000)
        cy.contains('¡Tarea Actualizada!')
        cy.get('button.swal2-confirm').click()
    })

    it('Crear nueva tarea', () => {
        // Ingresar datos de tarea
        cy.get('[formControlName="nombre"]').type('Nueva tarea generada por test')
        cy.get('[formControlName="descripcion"]').type('Descripcion de tarea generada por test')
        cy.get('[formControlName="estatus"]').select('Pendiente')
        // Enviar datos
        cy.get('button[type="submit"').click()
        cy.wait(1000)
        cy.contains('¡Tarea creada con éxito!')
        cy.get('button.swal2-confirm').click()
    })

    it('Eliminar tarea', () => {
        // Seleccionar boton de eliminar tarea
        cy.get('table.mistareas_table tbody tr img[alt="Eliminar"]:first').click()
        // Mostrar alerta de confirmacion
        cy.contains('¿Seguro de eliminar esta tarea?')
        // Esperar 500ms y confimar eliminacion
        cy.wait(500)
        cy.get('button.swal2-confirm').click()
        cy.wait(1000)
        // Mostrar mensaje de eliminacion exitosa
        cy.contains('¡Tarea eliminada!')
        cy.get('button.swal2-confirm').click()
    })
})