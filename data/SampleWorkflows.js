
define([], function () {
    "use strict";

    return [{
        "id": 1,
        "description": "Serial workflow items",
        "data": [
            {
                "id": 11,
                "name": "Item11",
                "description": "Description11",
                "sequence": 1
            },
            {
                "id": 21,
                "name": "Item21",
                "description": "Description21",
                "sequence": 2
            },
            {
                "id": 31,
                "name": "Item31",
                "description": "Description31",
                "sequence": 3
            },
            {
                "id": 41,
                "name": "Item41",
                "description": "Description41",
                "sequence": 4
            }
        ]
    },
    {
        "id": 2,
        "description": "Simple parallel workflow items",
        "data": [
            {
                "id": 11,
                "name": "Item11",
                "description": "Description11",
                "sequence": 1
            },
            {
                "id": 21,
                "name": "Item21",
                "description": "Description21",
                "sequence": 2
            },
            {
                "id": 22,
                "name": "Item22",
                "description": "Description22",
                "sequence": 2
            },
            {
                "id": 23,
                "name": "Item23",
                "description": "Description23",
                "sequence": 2
            },
            {
                "id": 31,
                "name": "Item31",
                "description": "Description31",
                "sequence": 3
            },
            {
                "id": 41,
                "name": "Item41",
                "description": "Description41",
                "sequence": 4
            },
            {
                "id": 42,
                "name": "Item42",
                "description": "Description42",
                "sequence": 4
            }
        ]
    },
    {
        "id": 3,
        "description": "Starting parallel workflow items",
        "data": [
            {
                "id": 11,
                "name": "Item11",
                "description": "Description11",
                "sequence": 1
            },
            {
                "id": 12,
                "name": "Item12",
                "description": "Description12",
                "sequence": 1
            },
            {
                "id": 21,
                "name": "Item21",
                "description": "Description21",
                "sequence": 2
            },
            {
                "id": 31,
                "name": "Item31",
                "description": "Description31",
                "sequence": 3
            },
            {
                "id": 32,
                "name": "Item32",
                "description": "Description32",
                "sequence": 3
            },
            {
                "id": 33,
                "name": "Item33",
                "description": "Description33",
                "sequence": 3
            },
            {
                "id": 41,
                "name": "Item41",
                "description": "Description41",
                "sequence": 4
            }
        ]
    },
    {
        "id": 4,
        "description": "Adjacent parallel workflow items",
        "data": [
            {
                "id": 11,
                "name": "Item11",
                "description": "Description11",
                "sequence": 1
            },
            {
                "id": 12,
                "name": "Item12",
                "description": "Description12",
                "sequence": 1
            },
            {
                "id": 21,
                "name": "Item21",
                "description": "Description21",
                "sequence": 2
            },
            {
                "id": 22,
                "name": "Item22",
                "description": "Description22",
                "sequence": 2
            },
            {
                "id": 23,
                "name": "Item23",
                "description": "Description23",
                "sequence": 2
            },
            {
                "id": 31,
                "name": "Item31",
                "description": "Description31",
                "sequence": 3
            }
        ]
    },
    {
        "id": 5,
        "description": "Complex parallel workflow items",
        "data": [
            {
                "id": 11,
                "name": "Item11",
                "description": "Description11",
                "sequence": 1
            },
            {
                "id": 12,
                "name": "Item12",
                "description": "Description12",
                "sequence": 1
            },
            {
                "id": 21,
                "name": "Item21",
                "description": "Description21",
                "sequence": 2
            },
            {
                "id": 22,
                "name": "Item22",
                "description": "Description22",
                "sequence": 2
            },
            {
                "id": 31,
                "name": "Item31",
                "description": "Description31",
                "sequence": 3
            },
            {
                "id": 32,
                "name": "Item32",
                "description": "Description32",
                "sequence": 3
            },
            {
                "id": 33,
                "name": "Item33",
                "description": "Description33",
                "sequence": 3
            },
            {
                "id": 41,
                "name": "Item41",
                "description": "Description41",
                "sequence": 4
            },
            {
                "id": 42,
                "name": "Item42",
                "description": "Description42",
                "sequence": 4
            },
            {
                "id": 43,
                "name": "Item43",
                "description": "Description43",
                "sequence": 4
            }
        ]
    },
    {
        "id": 6,
        "description": "Complex parallel workflow items with unsorted and non continuous sequence",
        "data": [
            {
                "id": 42,
                "name": "Item42",
                "description": "Description42",
                "sequence": 10
            },
            {
                "id": 21,
                "name": "Item21",
                "description": "Description21",
                "sequence": 5
            },
            {
                "id": 11,
                "name": "Item11",
                "description": "Description11",
                "sequence": 2
            },
            {
                "id": 22,
                "name": "Item22",
                "description": "Description22",
                "sequence": 5
            },
            {
                "id": 31,
                "name": "Item31",
                "description": "Description31",
                "sequence": 6
            },
            {
                "id": 23,
                "name": "Item23",
                "description": "Description23",
                "sequence": 5
            },
            {
                "id": 12,
                "name": "Item12",
                "description": "Description12",
                "sequence": 2
            },
            {
                "id": 41,
                "name": "Item41",
                "description": "Description41",
                "sequence": 10
            },
            {
                "id": 43,
                "name": "Item43",
                "description": "Description43",
                "sequence": 10
            },
            {
                "id": 32,
                "name": "Item32",
                "description": "Description32",
                "sequence": 6
            }
        ]
    },
    {
        "id": 7,
        "description": "Invalid workflow items",
        "data": [
            {
                "abc": 100,
                "xyz": "xyz"
            },
            {}
        ]
    }];
});