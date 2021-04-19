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
            if (this.inputVal !== '') {
                this.notes.push(this.inputVal)
                this.inputVal = ''
            }
        },
        doubleCount() {
            return this.notes.length * 2
        },
        toUpperCase(i) {
            return i.toUpperCase()
        },
        notesDel(idx) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed')
            return this.notes.length * 2
        }
    }
}

 Vue.createApp(App).mount('#app')
