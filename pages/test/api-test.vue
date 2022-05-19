<template>
  <div>
    <div>
      SessionId = {{ showsessionId }}
      <br />
    </div>
    <hr />
    <div align="left" dir="ltr">
      <hr />
      <pre>{{ ddata }}</pre>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'test',
  async asyncData({ $axios, $cookies }) {
    const ip = await $axios.$post(
      'https://apidemo.partocrs.com/Rest/Authenticate/CreateSession',
      {
        OfficeId: 'CRS001344',
        UserName: 'Api',
        Password:
          'b5c125ddab27c99d8173501891f8153bc505833d03681961209f05677ab81bd0369071b736e35054e1d2635a6e3ab06db0407de9d86e31900bca7d06371a9dd9',
      }
    )
    $cookies.set('session', ip.SessionId, {
      maxAge: 60 * 60 * 24 * 7,
    })
    return { ip }
  },
  data() {
    return {
      ddata: null,
    }
  },
  computed: {
    showsessionId() {
      return this.$cookies.get('session')
    },
  },
  async mounted() {
    const data = {
      PricingSourceType: 0,
      RequestOption: 2,
      SessionId: this.$cookies.get('session'),
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
    const response = await axios.post('/AirLowFareSearch', data)
    this.ddata = response.data.PricedItineraries
  },
}
</script>
