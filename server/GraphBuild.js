function SchemaGraph(data) {
  this.nodes = [];
  this.links = [];
  this.addTypes(data);
}

SchemaGraph.prototype.addTypes = function (data) {
  let counter = 0;
  data.forEach((type) => {
    if (type.name[0] !== '_' && type.name[1] !== '_' && type.kind !== 'SCALAR') {
      const thisType = new Type(type);
      thisType.color = counter++;
      const { fields } = thisType;

      if (fields) {
        thisType.fields = fields.map((field, i) => {
          const f = {
            name: field.name,
            description: field.description,
            defaultValue: field.defaultValue,
            args: field.args,
            color: i,
            isRequired: false,
            isList: false,
            type: {},
          };

          updateTypes(f, field);

          if (f.type.kind !== 'SCALAR' && Object.keys(f.type).length) {
            this.links.push(new Edge(thisType.name, f.type.name, thisType.color));
          }
          return f;
        });
      }

      this.nodes.push(thisType);
    }
  });
};

function Edge(source, target, color) {
  this.source = source;
  this.target = target;
  this.color = color;
}

function Type(type) {
  const {
    kind, name, description, fields, color,
  } = type;
  this.kind = kind;
  this.name = name;
  this.description = description;
  this.fields = fields;
  this.color = color;
}

function updateTypes(objectToUpdate, data) {
  let { type } = data;

  while (type !== null) {
    switch (type.kind) {
      case 'NON_NULL':
        objectToUpdate.isRequired = true;
        break;

      case 'LIST':
        objectToUpdate.isList = true;
        break;

      case 'OBJECT':
        objectToUpdate.type.kind = 'OBJECT';
        objectToUpdate.type.name = type.name;
        break;

      case 'SCALAR':
        objectToUpdate.type.kind = 'SCALAR';
        objectToUpdate.type.name = type.name;
        break;

      case 'UNION':
        objectToUpdate.type.kind = 'UNION';
        objectToUpdate.type.name = type.name;
        break;

      case 'ENUM':
        objectToUpdate.type.kind = 'ENUM';
        objectToUpdate.type.name = type.name;
    }

    type = type.ofType;
  }
}

module.exports = { SchemaGraph };

// b = new SchemaGraph(a.data.__schema.types)
