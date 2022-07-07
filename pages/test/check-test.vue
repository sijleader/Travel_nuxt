<template>
    <div>
        پرداخت به چوخ رفت
        <hr>
        <button @click.prevent="check"> send</button>
        <pre>
        <!-- {{ error }}
        <hr> -->
        <div dir="ltr">
        {{ refid }}

        </div>
        <hr>
        {{ tracking }}
        <hr>
        {{ error }}
        <hr>
        <!-- {{ this.$route.query.transaction_id }} -->
        <!-- <hr> -->
        <!-- {{ this.$route.query.Authority }} -->
        <!-- <hr> -->
        <!-- {{ refid.Status }} -->
        
        </pre>
    </div>
</template>

<script>
// import axios from 'axios'

export default {
    layout: 'test',

    data() {
        return {
            refid: null,
            result: null,
            tracking: null,
            refID: null,
            error: null
        }
    },
    methods: {
        check() {
            this.refid = this.$route.query
            this.tracking = this.$route.query.info
            this.error = this.$route.query.Status
            // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjYxM2NiZGRhZWI1Njk5MmIzZTMxMjBlZTg2YTkzNmUzZDU4Y2RmYmYxNzZiNWJlYjQzOGM1NjM1N2I2MDkyNTE2YWFhNmE3MGViM2ZhNTMiLCJpYXQiOjE2NTU1MzQ0NzQuMzQ1NDcxLCJuYmYiOjE2NTU1MzQ0NzQuMzQ1NDc0LCJleHAiOjE2ODcwNzA0NzQuMDkzNTkxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.pfYV5p68w-2egmftUwXMI4liB5W_6r3w5szjOgUMMmWEXM_GbNA1WZgLYs7uiOHADZ_r3Gm8vYPmV0-GLmLkdckDY-Sqlup-9zmMGMtadjmOnvmR5HBbUNegBZmhi7NjJ_4OP7sgRH6tw1dEbUPXOCnBSBtXqpIHc237XKRmGndg12lvXoqfbSCfqcpS9wID8wCBQVqSfcyIT3BcfQiWhscUNUGCWGM9L-W8Bdjt-qIzE24uIsbk7_8kUa1o6K-GnPNqmL6J_ZnDnP93HzYl24TDvSzVDbBHbhKXXBppFf2WeaJnVqVre3av1m_sJ4y3wl94L1hSnjRH1G_J613p9VUKid4r2QyLX1eXAvVgeqHOQfGEwxlDqvSgCdW_xzR7JkN63Fy9b2JHdgsJfE2Df4btyCcTfW6gL99YDl42z7oRzdx5QJOrD6RCc2QALRagLT7AC_KfxdVRbYEM81YWp-8Kbd3PQS8sJEE8vKIf_OfkA-r2kG7kDeopIt-cIJHIMwu-7ECaoNCVM4L3k1dJuvsHrJeE2duxoa9lmAHd-SCiUa2qHyRYkWFcwxuK2_H7cbOfSl-Sd6ialoNZIWiK118ICWHAz204zOIQM5H8ba8LVFMeg-S9p5atCkVjj5mZZkBIFJj5ccgCmLQ_Gk3xwP4sAkQAgE_G-N_mRMWFEE0'
            // axios({
            //     method: 'get',
            //     url: '/book/checkoutverifylogs',
            //     headers: { 'Authorization': 'Bearer ' + token },
            //     data: {
            //         TrackingCode: this.$route.query.info,
            //     },
            // })
            //     .then(response => {
            //         console.log(response.data)
            //     })
            //     .catch(error => {
            //         this.error = error
            //         console.log(error.response)
            //     })
        }
    }

}
</script>