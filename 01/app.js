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
        addNewNotes() {
            if (this.inputVal !== '') {
                this.notes.push(this.inputVal)
                this.inputVal = ''
            }
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
    },
    watch: {
        inputVal(value) {
            if (value.length > 10) {
                this.inputVal = ''
            }
        }
    }
}

 Vue.createApp(App).mount('#app')
