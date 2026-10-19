function transform(line) {

    var values = line.split(",");

    if (values[0] === "Index") {
        return null;

    }

    var obj = new object();
    obj.Index = parseInt(values[0]);
    obj.Name = values[1];

    var jsonString = JSON.stringify(obj);

    return jsonString;

}
