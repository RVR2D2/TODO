const App = {
    data() {
        return {
            title: 'Список заметок',
            myPlaceholder: 'Введите название заметки',
            inputVal: '',
            notes: ['Заметка 1 ', 'Заметка 2']
        }
    },
    methods: {
        inputChangeVal(e) {
            this.inputVal = e.target.value
        },
        addNewNotes() {
            this.notes.push(this.inputVal)
            this.inputVal = ''
        },
        notesDel(idx) {
            this.notes.splice(idx, 1)
        }
    }
}

 Vue.createApp(App).mount('#app')
