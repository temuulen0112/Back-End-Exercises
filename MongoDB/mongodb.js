// Query-1 array object deer update uildel + $inc (sample_supplies)
db.sales.updateOne({ _id: ObjectId("5bd761dcae323e45a93ccfe8") }, { $inc: { "items.$[].quantity": 5 } });

// Query-2 array deer update uildel + $push + $each + $position + $sort (sample_analytics)
db.customers.updateOne({ _id: ObjectId("5ca4bbcea2dd94ee58162a68") }, { $push: { accounts: { $each: [567890, 123456], $position: 0, $sort: 1 } } });

// Query-3 $addToSet (sample_supplies)
db.sales.updateOne({ _id: ObjectId("5bd761dcae323e45a93ccfe8") }, { $addToSet: { "items.3.tags": { $each: ["pen", "brush", "school", "uniform", "eraser", "ruler"] } } });

// Query-4 $pull (sample_supplies)
db.sales.updateOne({ _id: ObjectId("5bd761dcae323e45a93ccfe8") }, { $pull: { "items.3.tags": { $in: ["pen", "uniform", "kids", "eraser"] } } });

//  Query-5 arrayFilters (sample_analytics)
db.customers.updateMany({ _id: ObjectId("5ca4bbcea2dd94ee58162a68") }, { $set: { "accounts.$[element]": 255000 } }, { arrayFilters: [{ "element": { $gte: 499000 } }] });

// Query-6 logical operator (sample_supplies)
db.sales.find({ $and: [{ storeLocation: "Seattle" }, { purchaseMethod: "Phone" }] }).limit(3);

// Query-7 $elemMatch (sample_supplies)
db.sales.find({ items: { $elemMatch: { name: "laptop" } } }).limit(3);




db.createCollection("food", {
  validator: {
    $jsonSchema: {
      required: ["name", "price", "portion", "discount", "stock"],
      properties: {
        name: {
          bsonType: "string"
        },
        price: {
          bsonType: "int"
        },
        portion: {
          bsonType: "int"
        },
        discount: {
          bsonType: "int"
        },
        stock: {
          bsonType: "int"
        }
      }
    }
  },
  validationlevel: "moderate",
  validationAction: "error"
})



// 03-25 Food Delivery Schema
db.createCollection("food_info", {
  validator: {
    $jsonSchema: {
      required: ["name", "price", "portion", "discount", "stock", "category"],
      properties: {
        name: {
          bsonType: "string"
        },
        price: {
          bsonType: "int"
        },
        portion: {
          bsonType: "int"
        },
        discount: {
          bsonType: "int"
        },
        stock: {
          bsonType: "int"
        },
        category: {
          bsonType: "object",
          required: ["name", "color"],
          properties: {
            name: { bsonType: "string" },
            color: { bsonType: "string" }
          }
        }
      }
    }
  },
  validationLevel: "moderate",
  validationAction: "error"
});

db.createCollection("order", {
  validator: {
    $jsonSchema: {
      required: ["order_detail", "customer", "deliver", "ordered_date", "order_status", "total_fee"],
      properties: {
        order_detail: {
          bsonType: "object",
          required: ["food_id", "food_price"],
          properties: {
            food_id: { bsonType: "string" },
            food_price: { bsonType: "int" }
          }
        },
        customer: {
          bsonType: "string"
        },
        deliver: {
          bsonType: "string"
        },
        ordered_date: {
          bsonType: "date"
        },
        order_status: {
          bsonType: "string"
        },
        total_fee: {
          bsonType: "int",
        }
      }
    }
  },
  validationLevel: "moderate",
  validationAction: "warn"
});

db.createCollection("user", {
  validator: {
    $jsonSchema: {
      required: ["name", "email", "password", "role"],
      properties: {
        name: {
          bsonType: "string"
        },
        email: {
          bsonType: "string"
        },
        password: {
          bsonType: "string"
        },
        role: {
          bsonType: "int"
        }
      }
    }
  },
  validationLevel: "moderate",
  validationAction: "error"
});

db.food_info.insertMany([
  {
    name: "Хулууны зутан",
    price: 6800,
    portion: 1,
    discount: 20,
    stock: 10,
    category: {
      name: "Үндсэн хоол",
      color: "blue"
    }
  },
  {
    name: "Итали пицца",
    price: 35800,
    portion: 4,
    discount: 10,
    stock: 10,
    category: {
      name: "Үндсэн хоол",
      color: "blue"
    }
  },
  {
    name: "Чикен рамен",
    price: 9800,
    portion: 1,
    discount: 0,
    stock: 10,
    category: {
      name: "Үндсэн хоол",
      color: "blue"
    }
  },
]);

db.order.insertMany([
  {
    order_detail: {
      food_id: "623d30c0a02cf28e303b9a05",
      food_price: 6800
    },
    customer: "623d4723a02cf28e303b9a18",
    deliver: "623d4723a02cf28e303b9a17",
    ordered_date: ISODate,
    order_status: "Pending",
    total_fee: 750
  },
  {
    order_detail: {
      food_id: "623d30c0a02cf28e303b9a06",
      food_price: 35800
    },
    customer: "623d4723a02cf28e303b9a18",
    deliver: "623d4723a02cf28e303b9a17",
    ordered_date: 2022 - 01 - 12,
    order_status: "Pending",
    total_fee: 550
  },
  {
    order_detail: {
      food_id: "623d3192a02cf28e303b9a07",
      food_price: 9800
    },
    customer: "623d480ba02cf28e303b9a1c",
    deliver: "623d4723a02cf28e303b9a17",
    ordered_date: 2022 - 01 - 12,
    order_status: "Ordered",
    total_fee: 0
  }
]);

db.user.insertMany([
  {
    name: "Admin",
    email: "tustas@jiij.com",
    password: "zaaduusduus",
    role: 1
  },
  {
    name: "Deliverman",
    email: "deliverman@mstars.mn",
    password: "deliverman",
    role: 2
  },
  {
    name: "Customer",
    email: "customer@medku.com",
    password: "goyhool",
    role: 3
  }
]);

db.user.insertOne({
  name: "uulen",
  email: "tem.uulen@punpan.mn",
  password: "nuutsug",
  role: 3
})

db.order.aggregate([
  { $addFields: { userObjectId: { "$toObjectId": "$customer" } } },
  {
    $lookup:
    {
      from: 'user',
      localField: 'userObjectId',
      foreignField: '_id',
      as: 'user_info'
    },
  },
  // { $count: "totalCount"}  nemelteer hiiv
]);

db.order.aggregate([
  { $sortByCount: "$order_detail" }
]).pretty();



db.createCollection("library", {
  validator: {
    $jsonSchema: {
      required: ["name", "price", "author", "isbn", "publishdate"],
      properties: {
        name: {
          bsonType: "string"
        },
        price: {
          bsonType: "int"
        },
        author: {
          bsonType: "string"
        },
        isbn: {
          bsonType: "int"
        },
        publishdate: {
          bsonType: "newDate(YYYY-mm-dd)"
        }
      }
    }
  },
  validationLevel: "moderate",
  validationAction: "error"
});