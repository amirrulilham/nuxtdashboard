export const state = () => ({
    alert: {
        // show: false,
        // dismissible: null,
        // color: "cyan",
        // border: "left",
        // elevation: 2,
        // coloredBorder: true,
        // icon: "mdi-alert-circle",
        // alertText: null
    }
})

export const mutations = {
    showAlert(state, text){
        state.alert.show = false,
        state.alert.dismissible = true,
        state.alert.alertText = text
    },
}

export const getters = {
    getAlert(state){
        return state.alert;
    }
}