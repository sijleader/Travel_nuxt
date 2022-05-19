// import Vue from 'vue'
// import datePicker from '@alireza-ab/vue-persian-datepicker'

// Vue.component('DatePicker', datePicker)
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import Vue from 'vue'

Vue.component('date-picker', VuePersianDatetimePicker);

// Vue.use('custom-date-picker', VuePersianDatetimePicker);
// Vue.use(VuePersianDatetimePicker, {
//     name: 'custom-date-picker',
//     props: {
//       format: 'YYYY-MM-DD HH:mm',
//       displayFormat: 'jYYYY-jMM-jDD HH:mm',
//       editable: false,
//       inputClass: 'form-control my-custom-class-name',
//       placeholder: 'Please select a date',
//       altFormat: 'YYYY-MM-DD HH:mm',
//       color: '#00acc1',
//       autoSubmit: true,
//     }
//   });