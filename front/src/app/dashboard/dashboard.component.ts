import { Component, OnInit } from '@angular/core';

declare var iniciarDatos: any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  data = {
    PayboxRemail: 'negocioprueba1ppx@gmail.com',
    PayboxSendmail: 'correocliente@gmail.com',
    PayboxRename: 'Prograwebs',
    PayboxSendname: 'Progra',
    PayboxBase0: '2.0',
    PayboxBase12: '10.0',
    PayboxDescription: 'Pago por aplicación',
    PayboxProduction: false,
    PayboxEnvironment: 'sandbox',
    PayboxLanguage: 'es',
    PayboxPagoPlux: true,
    PayboxDirection: 'Direccion tarjetahabiente',
    PayBoxClientPhone: '0954854125',
    PayboxClientName: 'Karen Gonzalez',
    PayBoxClientIdentification: '0502395130',
    PayboxRecurrent: true,
    PayboxIdPlan: '171',
    PayboxPermitirCalendarizar: true,
    PayboxPagoInmediato: true,
    PayboxCobroPrueba: false,
    PayboxAmountVariablePlan: true,
    PayboxFrequencyPlan: 'MEN',
    PayboxTieneIvaPlan: true,
    PayboxDescriptionPlan: 'Descripcion plan',
    PayboxIdElement: 'idElementoTest',
    onAuthorize: (response: any) => {
      if (response.status === 'succeeded') {
        //jQuery('.container-unpayed').hide(); //oculta la respuesta
        response.amount, //monto
          response.deferred, //diferidos
          response.interest, //tiene intereses
          response.interestValue, //monto intereses
          response.amountWoTaxes, //monto impuestos
          response.cardInfo, //número de tarjeta encriptado
          response.cardIssuer, //marca tarjeta Ejemplo: Visa
          response.cardType, //tipo tarjeta Ejemplo: Crédito
          response.clientID, //identificación tarjetahabiente
          response.clientName, //nombre tarjetahabiente
          response.fecha, //fecha de pago
          response.id_transaccion, //id de transacción pagoplux
          response.state, //estado del pago
          response.token, //voucher del pago
          response.tipoPago; //tipo de pago usado
        console.log(response);
      }
    },
  };

  ngOnInit() {
    iniciarDatos(this.data);
  }
}
