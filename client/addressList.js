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

Template.addressList.events({
  'click button[name=remove]' (evt,tmpl){
    AddressBook.remove({_id : this._id});
}
});

Template.addressInput.events({
  'click button[name=saveAddress]' (evt,tmpl){
      console.log(tmpl);
      var address = {
        name : tmpl.find("input[name=name]").value,
        phone : tmpl.find("input[name=phone]").value,
        email : tmpl.find("input[name=email]").value,
        company : tmpl.find("input[name=company]").value,
        birthday : tmpl.find("input[name=birthday]").value
      };
      console.log(address);

      AddressBook.insert(address);

       tmpl.find("input[name=name]").value = "";
       tmpl.find("input[name=phone]").value = "";
       tmpl.find("input[name=email]").value = "";
       tmpl.find("input[name=company]").value = "";
       tmpl.find("input[name=birthday]").value = "";
  }
});
