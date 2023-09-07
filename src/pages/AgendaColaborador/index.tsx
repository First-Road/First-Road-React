import React, { Component } from 'react';
import Aside from '../../components/aside'; // Certifique-se de fornecer o caminho correto para o componente Aside
import './style.css';

class AgendaColaborador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mes: 0,
      events: localStorage.getItem('events')
        ? JSON.stringify(localStorage.getItem('events'))
        : [],
    };

    this.semanas = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    const { mes } = this.state;
    const data = new Date();

    if (mes !== 0) {
      data.setMonth(new Date().getMonth() + mes);
    }

    this.setState({
      monthDisplay: `${data.toLocaleDateString('pt-br', { month: 'long' })}, ${data.getFullYear()}`,
      calendar: this.generateCalendar(data),
    });
  };

  generateCalendar = (date) => {
    const { mes } = this.state;
    const daysMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dateString = firstDayMonth.toLocaleDateString('pt-br', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    const paddinDays = this.semanas.indexOf(dateString.split(', ')[0]);

    const calendar = [];

    for (let i = 1; i <= paddinDays + daysMonth; i++) {
      const dayString = `${date.getMonth() + 1}/${i - paddinDays}/${date.getFullYear()}`;
      const isCurrentDay = i - paddinDays === date.getDate() && mes === 0;
      const eventDay = this.state.events.find((event) => event.data === dayString);

      const dayS = (
        <div className={`day ${isCurrentDay ? 'currentDay' : ''}`} key={i}>
          {i > paddinDays && (
            <span onClick={() => this.openModal(dayString)}>{i - paddinDays}</span>
          )}
          {eventDay && <div className="event">{eventDay.title}</div>}
        </div>
      );

      calendar.push(dayS);
    }

    return calendar;
  };

  buttons = () => {
  
  };

  openModal = (dayString) => {
    // Implemente a lógica de abertura do modal aqui
  };

  render() {
    return (
      <main id="aside_colaborador">
        <Aside />

        <div className="calendario">
          <div className="container">
            <div className="cabecalho">
              <div className="titulo">
                <h1>Minha Agenda</h1>
              </div>
              <div id="monthDisplay">{this.state.monthDisplay}</div>
              <div>
                <button id="backButton" onClick={() => this.setState({ mes: this.state.mes - 1 })}>
                  Voltar
                </button>
                <button id="nextButton" onClick={() => this.setState({ mes: this.state.mes + 1 })}>
                  Próximo
                </button>
              </div>
            </div>
            <div id="weekdays">
              {this.semanas.map((dia, index) => (
                <div key={index} className={dia}>
                  <span>{dia}</span>
                </div>
              ))}
            </div>
            <div id="calendar">{this.state.calendar}</div>
          </div>
        </div>
      </main>
    );
  }
}

export default AgendaColaborador;