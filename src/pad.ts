class Pad {

    constructor(public type, public identifier, public active, public selected) {
      this.active = false
      this.selected = false
    }

    toggleSelected(){
      this.selected = !this.selected
    }

}

export default Pad;
