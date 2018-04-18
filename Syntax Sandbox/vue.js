new Vue({
  el: '#app',
  created(){
    console.log('created')
  },
    mounted(){
    console.log('mounted')
  },
    updated(){
    console.log('updated');
  },
  beforeDestroyed(){
    
  },
  data() {
    return {
      order: '',
      test: 'Get to tha choppa!',
      instructor: 'Steven',
      userInput: '',
      staff: [
        'Steven',
        'Erik',
        'Garrett',
        'Chris'
      ],
      filter:''
    }
  },
  methods: {
    addStaff(){
      this.staff.push(this.userInput);
      this.userInput = '';
    }
  },
  computed: {
    orderedStaff(){
      if (this.order === 'desc'){
        return this.staff.slice().sort((a,b)=> a<b)
      }
      if (this.order === 'asc'){
        return this.staff.slice().sort((a,b)=> a > b)
      }
      return this.staff;
    },
    filtered(){
      return this.staff.filter(c=> c.includes(this.filter))
    }
  }
})


















