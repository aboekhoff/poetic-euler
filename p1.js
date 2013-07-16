RT["p1::multiple-of-3?"] = function(arg_1_0) {
    var local_1_0;
    block_1_0: {
        local_1_0 = RT["poet::="](0, RT["poet::mod"](arg_1_0, 3));
    };
    return local_1_0;
};

RT["p1::sum-multiples-to"] = function(arg_1_0) {
    var local_1_0, local_1_1, local_1_2, local_1_3, local_1_4, local_1_5, local_1_6, local_1_7;
    block_1_0: {
        local_1_1 = 0;
        local_1_2 = 0;
        local_1_3 = local_1_2;
        block_1_1: {
            block_1_2:for(;;) {
                local_1_4 = RT["poet::="](local_1_3, arg_1_0);
                if (local_1_4 != null && local_1_4 !== false) {
                    local_1_0 = local_1_1;
                    break block_1_1;
                };
                local_1_6 = RT["poet::="](RT["poet::mod"](local_1_3, 3), 0);
                local_1_7 = local_1_6;
                if (local_1_7 != null && local_1_7 !== false) {
                    local_1_5 = local_1_6;
                } else {
                    local_1_5 = RT["poet::="](RT["poet::mod"](local_1_3, 5), 0);
                };
                if (local_1_5 != null && local_1_5 !== false) {
                    local_1_1 = RT["poet::+"](local_1_1, local_1_3);
                };
                local_1_2 = RT["poet::+"](local_1_3, 1);
                local_1_3 = local_1_2;
                local_1_0 = local_1_3;
            };
        };
    };
    return local_1_0;
};

RT["poet::prn"](RT["p1::sum-multiples-to"](1000));