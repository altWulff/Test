#! /bin/env python3
# Write a Python function that print the minimum key and value
# from the following dictionary

Numbers = {
    "number_1": "10.5",
    "number_2": 20,
    "number_3": 3.5
}


def get_minimum_items_dict(numbers_dict: dict) -> tuple:
    """Get minimum items from dict"""

    def to_number_type(n):
        if type(n) is int:
            return n
        return float(n)

    minimum_key = min(numbers_dict)
    minimum_value = min(map(to_number_type, numbers_dict.values()))
    print(f'{minimum_key=} {minimum_value=}')
    return minimum_key, minimum_value


def main():
    result = get_minimum_items_dict(Numbers)
    assert result == ("number_1", 3.5)


if __name__ == '__main__':
    main()
