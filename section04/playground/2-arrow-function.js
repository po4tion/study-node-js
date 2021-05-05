const event = {
  name: 'Birthday Party',
  guestList: ['동규', '명규'],
  printGuest() {
    console.log('Guest list for ' + this.name);

    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`);
    });
  },
};

event.printGuest();
