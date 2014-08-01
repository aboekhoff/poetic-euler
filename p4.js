RT["p4::palindrome?"] = function(arg_1_0) {
    var local_1_0, local_1_1, local_1_2, local_1_3, local_1_4, local_1_5;
    block_1_0: {
        local_1_1 = RT["poet::+"](arg_1_0, "");
        local_1_2 = RT["poet::-"](local_1_1["length"], 1);
        local_1_3 = 0;
        block_1_1:for(;;) {
            local_1_4 = RT["poet::<="](local_1_2, local_1_3);
            if (local_1_4 != null && local_1_4 !== false) {
                local_1_0 = true;
                break block_1_1;
            };
            local_1_5 = RT["poet::not"](RT["poet::="](local_1_1["charAt"](local_1_3), local_1_1["charAt"](local_1_2)));
            if (local_1_5 != null && local_1_5 !== false) {
                local_1_0 = false;
                break block_1_1;
            };
            local_1_3 = RT["poet::+"](local_1_3, 1);
            local_1_2 = RT["poet::-"](local_1_2, 1);
            local_1_0 = local_1_2;
        };
    };
    return local_1_0;
};

RT["p4::run-y"] = function(arg_1_0, arg_1_1) {
    var local_1_0, local_1_1, local_1_2, local_1_3, local_1_4, local_1_5, local_1_6;
    block_1_0: {
        local_1_1 = arg_1_0;
        local_1_2 = local_1_1;
        block_1_1: {
            block_1_2:for(;;) {
                local_1_3 = RT["poet::="](local_1_2, 0);
                if (local_1_3 != null && local_1_3 !== false) {
                    local_1_0 = arg_1_1;
                    break block_1_1;
                };
                local_1_4 = RT["poet::*"](arg_1_0, local_1_2);
                local_1_5 = RT["poet::<="](local_1_4, arg_1_1);
                if (local_1_5 != null && local_1_5 !== false) {
                    local_1_0 = arg_1_1;
                    break block_1_0;
                };
                local_1_6 = RT["p4::palindrome?"](local_1_4);
                if (local_1_6 != null && local_1_6 !== false) {
                    arg_1_1 = local_1_4;
                };
                local_1_1 = RT["poet::dec"](local_1_2);
                local_1_2 = local_1_1;
                local_1_0 = local_1_2;
            };
        };
    };
    return local_1_0;
};

RT["p4::run-x"] = function(arg_1_0) {
    var local_1_0, local_1_1, local_1_2, local_1_3, local_1_4;
    block_1_0: {
        local_1_1 = 0;
        local_1_2 = arg_1_0;
        local_1_3 = local_1_2;
        block_1_1: {
            block_1_2:for(;;) {
                local_1_4 = RT["poet::="](local_1_3, 0);
                if (local_1_4 != null && local_1_4 !== false) {
                    local_1_0 = local_1_1;
                    break block_1_1;
                };
                local_1_1 = RT["p4::run-y"](local_1_3, local_1_1);
                local_1_2 = RT["poet::dec"](local_1_3);
                local_1_3 = local_1_2;
                local_1_0 = local_1_3;
            };
        };
    };
    return local_1_0;
};

RT["poet::prn"](RT["p4::run-x"](99));

RT["poet::prn"](RT["p4::run-x"](999));