import definePaySystem from '../definePaySystem';

test.each([
    ['difine mir', '2024007121662665', 'mir'],
    ['difine diners_club', '30498893188615', 'diners_club'],
    ['difine jcb', '3531689355445430', 'jcb'],
    ['difine amex', '370181501409924', 'amex'],
    ['difine visa', '4024007161170153', 'visa'],
    ['difine master', '5243031288994701', 'master'],
    ['difine discover', '6011308714220952', 'discover'],
    ['not define system', '5478965423654859', 'Payment system is not defined'],
    ])(('it should %s'), (_, input, expected) => {
    expect(definePaySystem(input)).toBe(expected);
    });