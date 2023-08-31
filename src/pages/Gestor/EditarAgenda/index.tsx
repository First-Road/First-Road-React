import "./style.css";

import { Link } from 'react-router-dom'
import AsideGestor from "../../../components/Aside_gestor";

function EditarAgenda() {

    function openModal(date: any){
        let clicked: any = null
        let events: any = localStorage.getItem('events') ? JSON.stringify(localStorage.getItem('events')) : []
        const deleteEventModal: any = document.getElementById
        ('deleteEventModal')
        const newEvent: any = document.getElementById('newEventModal')
        const backDrop: any = document.getElementById('modalBackDrop')
        clicked = date
        const eventDay = events.find((event: any)=>event.date === clicked)
        let eventTexto: any = document.getElementById('eventText')
       
       
      
        if (eventDay){
        
         eventTexto.innerText = eventDay.title
         deleteEventModal.style.display = 'block'
      
      
        } else{
          newEvent.style.display = 'block'
      
        }
      
        backDrop.style.display = 'block'
      }

    return (
        <main id="editar_agenda">
            <AsideGestor/>
            <section className="calendario">
                <div className="container">
                    <div className="cabecalho">
                        <div className="titulo">
                            <h1> Editar Agenda Colaborador</h1>
                        </div>
                        <div id="monthDisplay" />
                        <div>
                            <button id="backButton">Voltar</button>
                            <button id="nextButton">Próximo</button>
                        </div>
                    </div>
                    <div id="weekdays">
                        <div className="domingo">
                            <span>Domingo</span>
                        </div>
                        <div className="segunda">
                            <span>Segunda-feira</span>
                        </div>
                        <div className="terca">
                            <span>Terça-feira</span>{" "}
                        </div>
                        <div className="quarta">
                            <span>Quarta-feira</span>{" "}
                        </div>
                        <div className="quinta">
                            <span>Quinta-feira</span>{" "}
                        </div>
                        <div className="sexta">
                            <span>Sexta-feira</span>
                        </div>
                        <div className="sabado">
                            {" "}
                            <span>Sábado</span>
                        </div>
                    </div>
                    <div id="calendar" />
                </div>
                <div id="newEventModal">
                    <h2>Adicionar Evento</h2>
                    <input id="eventTitleInput" placeholder="Digite o novo evento" />
                    <button id="saveButton"> Salvar</button>
                    <button id="cancelButton">Cancelar</button>
                </div>
                <div id="deleteEventModal">
                    <h2>Evento</h2>
                    <div id="eventText" />
                    <br />
                    <button id="deleteButton">Deletar</button>
                    <button id="closeButton">Fechar</button>
                </div>
                <div id="modalBackDrop" />
            </section>
        </main>
    )

}
export default EditarAgenda