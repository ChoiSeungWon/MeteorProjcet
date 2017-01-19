Template.addressList.helpers({
  // list:[
  //   {
  //     "name": "Nolan Johnson",
  //     "phone": "047-094-3933",
  //     "email": "Vestibulum.ut.eros@urnaUttincidunt.com",
  //     "company": "Risus Incorporated",
  //     "birthday": "2017/08/28"
  //   },
  //   {
  //     "name": "Ivan Griffith",
  //     "phone": "043-293-6392",
  //     "email": "enim.diam.vel@liberoest.ca",
  //     "company": "Mollis Phasellus Industries",
  //     "birthday": "2017/01/29"
  //   }
  // ]
  list(){
    return AddressBook.find({},{limit:10,sort : {name:1}});
  }
});
