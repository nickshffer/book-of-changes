CREATE TABLE Reading (
    _id INT NOT NULL UNIQUE, 
    firstName VARCHAR(20), 
    lastName VARCHAR(40), 
    question TEXT, 
    presentHexDef TEXT, 
    presentHex TEXT, 
    presentHexDescrip TEXT, 
    futureHexDef TEXT, 
    futureHex TEXT, 
    futureHexDescrip TEXT, 
    changingLines TEXT, 
    thoughts TEXT
);