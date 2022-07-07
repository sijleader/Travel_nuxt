<template>
    <div>
        <input v-model="ticketprice" type="text">
        <button type="submit" @click.prevent="submit">order</button>
        <pre>
            <!-- {{js}} -->
            <p v-html="refid"></p>
            <hr>
            <!-- {{refid}} -->
        </pre>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'test',
    data() {
        return {
            ticketprice: null,
            refid: null,
            // routeverify: null,
            routeverify: 'http://localhost:3000/test/check-test?',
            js: null
        }
    },
    methods: {
        submit() {
            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjYxM2NiZGRhZWI1Njk5MmIzZTMxMjBlZTg2YTkzNmUzZDU4Y2RmYmYxNzZiNWJlYjQzOGM1NjM1N2I2MDkyNTE2YWFhNmE3MGViM2ZhNTMiLCJpYXQiOjE2NTU1MzQ0NzQuMzQ1NDcxLCJuYmYiOjE2NTU1MzQ0NzQuMzQ1NDc0LCJleHAiOjE2ODcwNzA0NzQuMDkzNTkxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.pfYV5p68w-2egmftUwXMI4liB5W_6r3w5szjOgUMMmWEXM_GbNA1WZgLYs7uiOHADZ_r3Gm8vYPmV0-GLmLkdckDY-Sqlup-9zmMGMtadjmOnvmR5HBbUNegBZmhi7NjJ_4OP7sgRH6tw1dEbUPXOCnBSBtXqpIHc237XKRmGndg12lvXoqfbSCfqcpS9wID8wCBQVqSfcyIT3BcfQiWhscUNUGCWGM9L-W8Bdjt-qIzE24uIsbk7_8kUa1o6K-GnPNqmL6J_ZnDnP93HzYl24TDvSzVDbBHbhKXXBppFf2WeaJnVqVre3av1m_sJ4y3wl94L1hSnjRH1G_J613p9VUKid4r2QyLX1eXAvVgeqHOQfGEwxlDqvSgCdW_xzR7JkN63Fy9b2JHdgsJfE2Df4btyCcTfW6gL99YDl42z7oRzdx5QJOrD6RCc2QALRagLT7AC_KfxdVRbYEM81YWp-8Kbd3PQS8sJEE8vKIf_OfkA-r2kG7kDeopIt-cIJHIMwu-7ECaoNCVM4L3k1dJuvsHrJeE2duxoa9lmAHd-SCiUa2qHyRYkWFcwxuK2_H7cbOfSl-Sd6ialoNZIWiK118ICWHAz204zOIQM5H8ba8LVFMeg-S9p5atCkVjj5mZZkBIFJj5ccgCmLQ_Gk3xwP4sAkQAgE_G-N_mRMWFEE0'
            // this.routeverify = this.$router.push('/test/check-test')
            axios({
                method: 'post',
                url: '/book/checkout',
                headers: { 'Authorization': 'Bearer ' + token },
                data: {
                    Price: this.ticketprice,
                    RouteVerify: this.routeverify
                },

            }).then(response => {
                // this.refid = response.data.RefID
                this.refid = response.data
                console.log(response.data)
            }).catch(error => {
                // if (error.response === 405)
                console.log('Error: ' + error)
            })
        }
    }

}
</script>