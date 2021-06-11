
new Vue({
    el: '#wrap',
    data: {
        message:'Oksana Ivanivna',
        mirror:'You name', 
    },
    methods: {
        clean: function(){
           this.message = "";
        },
        mirrorFunc: function(){
            this.message = this.message.split('').reverse().join('');
            return this.mirror.split('').reverse().join('');
        }
    }

})
new Vue({
    el: '#calc',
    data:{
        result: '',
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 
        operation: ['+', '-', '*', '/'],
    },
    methods: {
        write: function(char) {
            this.result = this.result.toString();
            this.result+=char;
          },
        clear: function(){
            this.result = "";
        },
        calc: function(){
            this.result = eval(this.result);
        }
    }
})