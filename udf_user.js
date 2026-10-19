function transform(line) {

    var values = line.split(',');
    var obj = new Object();
    obj.user_id = parseInt(values[0]);
    obj.first_name = values[1];
    obj.last_name = values[2];
    obj.email = values[3];
    obj.phone = parseInt(values[4]);
    obj.city = values[5];
    obj.country = values[6];
    obj.age = parseInt(values[7]);
    obj.gender = values[8];

    var jsonString = JSON.stringify(obj);

    return jsonString;

}
