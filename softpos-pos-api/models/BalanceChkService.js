const getETDPW = data => {
    const d = data.split("/")
    let str = "";
    if (d[0].equals("Y")) {
        str += "E,";
    }
    if (d[1].equals("Y")) {
        str += "T,";
    }
    if (d[2].equals("Y")) {
        str += "D,";
    }
    if (d[3].equals("Y")) {
        str += "P,";
    }
    if (d[4].equals("Y")) {
        str += "W,";
    }
    return str.split(",");
}

const getETDPW_Active = (ETD, data) => {
    const d = getETDPW(data);
    d.forEach(dd => {
        if (ETD.equals(dd)) {
            return true;
        }
    })

    return false;
}