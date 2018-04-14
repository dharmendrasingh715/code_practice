var events = {
  allEvents:[],
  on: function(ev, callback) {
    this.allEvents[ev] = this.allEvents[ev] || [];
    this.allEvents[ev].push(callback);
  },
  off: function(ev, callback) {
    if(this.allEvents[ev]) {
      for(i=0;i<this.allEvents[ev].length;i++) {
        if(this.allEvents[ev][i]===callback) {
          this.allEvents[ev].splice(i,1);
          break;
        }
      }
    }
  },
  trigger: function(ev, data) {
    if(this.allEvents[ev]) {
      this.allEvents[ev].forEach(function(fn) {
        fn(data);
      });
    }
  }
}
