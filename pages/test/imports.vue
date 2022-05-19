<template>
  <div>
    <div align="left" dir="ltr">
      <hr />
      <div v-for="(data, index) in ddata.PricedItineraries" :key="index">
        <!-- <pre>
        {{data.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime}}
        <hr>
        {{data.OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime}}
        </pre> -->

        <hr />
        <pre>
          {{data}}
          <hr>
          <!-- {{getTime(data.OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime)}} -->
          <!-- <hr />
          {{
            new Date(
              data.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime
            ).toLocaleTimeString('en-US', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
            })
          }} -->
        </pre>
      </div>
      <!-- <div>{{ calculateAge }}</div> -->
      <!-- <div>
        adult: {{calculateAge.adult}}
        <hr>
        child: {{calculateAge.child}}
        <hr>
        infant: {{calculateAge.infant}}
      </div> -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import moment from 'moment-jalaali'
export default {
  layout: 'test',
  async asyncData({ $axios, $cookies }) {
    const ip = await $axios.$post(
      'https://apidemo.partocrs.com/Rest/Air/AirLowFareSearch',
      {
        PricingSourceType: 0,
        RequestOption: 2,
        SessionId: $cookies.get('session'),
        AdultCount: 1,
        ChildCount: 0,
        InfantCount: 0,
        TravelPreference: {
          CabinType: 1,
          MaxStopsQuantity: 0,
          AirTripType: 1,
        },
        OriginDestinationInformations: [
          {
            DepartureDateTime: '2022-05-15',
            DestinationLocationCode: 'MHD',
            DestinationType: 0,
            OriginLocationCode: 'THR',
            OriginType: 0,
          },
        ],
      }
    )
    // const revalidate = await $axios.$post(
    //   'https://apidemo.partocrs.com/Rest/Air/AirRevalidate',
    //   {
    //     SessionId: $cookies.get('session'),
    //     FareSourceCode: ip.PricedItineraries[0].FareSourceCode,
    //   }
    // )
    return { ddata: ip }
  },
  Data() {
    return {
      ddata: null,
      dddata: null,
      AdultCount: 0,
      ChildCount: 0,
      InfantCount: 0,
    }
  },
  computed: {
    getTime() {
      return new Date(this).toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      })
    },
    calculateAge() {
      let infant = 0
      let child = 0
      let adult = 0
      const currentDate = new Date()
      const birthDate = new Date('2018-5-9')
      const difference = currentDate - birthDate
      const age = Math.floor(difference / 31557600000)
      // switch(age){
      //   case
      // }
      if (age < 2) {
        infant = +1
      } else if (age >= 2 && age < 11){
        child = +1
      }
      else{
        adult = +1
      }
      return { infant, child, adult }
    },
  },
  // async mounted() {
  //   const data = {
  //     PricingSourceType: 0,
  //     RequestOption: 2,
  //     SessionId: this.$cookies.get('session'),
  //     AdultCount: 1,
  //     ChildCount: 0,
  //     InfantCount: 0,
  //     TravelPreference: {
  //       CabinType: 1,
  //       MaxStopsQuantity: 0,
  //       AirTripType: 1,
  //     },
  //     OriginDestinationInformations: [
  //       {
  //         DepartureDateTime: '2022-05-15',
  //         DestinationLocationCode: 'MHD',
  //         DestinationType: 0,
  //         OriginLocationCode: 'THR',
  //         OriginType: 0,
  //       },
  //     ],
  //   }
  //   const response = await axios.post('/AirLowFareSearch', data)
  //   this.dddata = response.data.PricedItineraries
  // },
  // async created() {
  //   const data = {
  //     PricingSourceType: 0,
  //     RequestOption: 2,
  //     SessionId: this.$cookies.get('session'),
  //     AdultCount: 1,
  //     ChildCount: 0,
  //     InfantCount: 0,
  //     TravelPreference: {
  //       CabinType: 1,
  //       MaxStopsQuantity: 0,
  //       AirTripType: 1,
  //     },
  //     OriginDestinationInformations: [
  //       {
  //         DepartureDateTime: '2022-05-15',
  //         DestinationLocationCode: 'MHD',
  //         DestinationType: 0,
  //         OriginLocationCode: 'THR',
  //         OriginType: 0,
  //       },
  //     ],
  //   }
  //   const response = await axios.post('/AirLowFareSearch', data)
  //   this.ddata = response.data.PricedItineraries
  // },
}
</script>
