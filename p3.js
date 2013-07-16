RT["p3::the-number"] = 600851475143;

RT["p3::defactor"] = function(arg_1_0, arg_1_1) {
    var local_1_0, local_1_1;
    block_1_0: {
        local_1_1 = RT["poet::zero?"](RT["poet::mod"](arg_1_0, arg_1_1));
        if (local_1_1 != null && local_1_1 !== false) {
            local_1_0 = RT["p3::defactor"](RT["poet::/"](arg_1_0, arg_1_1), arg_1_1);
        } else {
            local_1_0 = arg_1_0;
        };
    };
    return local_1_0;
};

RT["p3::prime-factors-of"] = function(arg_1_0) {
    var local_1_0;
    block_1_0: {
        local_1_0 = RT["p3::prime-factors-of*"](arg_1_0, 2);
    };
    return local_1_0;
};

RT["p3::prime-factors-of*"] = function(arg_1_0, arg_1_1) {
    var local_1_0, local_1_1, local_1_2, local_1_3;
    block_1_0: {
        block_1_1:for(;;) {
            local_1_1 = RT["poet::>"](arg_1_1, RT["poet::/"](arg_1_0, 2));
            if (local_1_1 != null && local_1_1 !== false) {
                local_1_0 = RT["poet::list"](arg_1_0);
                break block_1_0;
            } else {
                local_1_2 = RT["poet::zero?"](RT["poet::mod"](arg_1_0, arg_1_1));
                if (local_1_2 != null && local_1_2 !== false) {
                    local_1_0 = RT["poet::cons"](arg_1_1, RT["p3::prime-factors-of*"](RT["p3::defactor"](arg_1_0, arg_1_1), RT["poet::inc"](arg_1_1)));
                    break block_1_0;
                } else {
                    local_1_3 = RT["poet::keyword"]("else");
                    if (local_1_3 != null && local_1_3 !== false) {
                        arg_1_1 = RT["poet::+"](arg_1_1, 1);
                        local_1_0 = arg_1_1;
                    } else {
                        local_1_0 = null;
                    };
                };
            };
        };
    };
    return local_1_0;
};

RT["poet::prn"](RT["p3::prime-factors-of"](RT["p3::the-number"]));