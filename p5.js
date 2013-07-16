RT["p5::defactor"] = function(arg_1_0, arg_1_1, arg_1_2) {
    var local_1_0, local_1_1;
    block_1_0: {
        local_1_1 = RT["poet::zero?"](RT["poet::mod"](arg_1_0, arg_1_1));
        if (local_1_1 != null && local_1_1 !== false) {
            local_1_0 = RT["p5::defactor"](RT["poet::/"](arg_1_0, arg_1_1), arg_1_1, RT["poet::inc"](arg_1_2));
        } else {
            local_1_0 = [arg_1_0, arg_1_2];
        };
    };
    return local_1_0;
};

RT["p5::prime-factors-of"] = function(arg_1_0) {
    var local_1_0;
    block_1_0: {
        local_1_0 = RT["p5::prime-factors-of*"](arg_1_0, 2);
    };
    return local_1_0;
};

RT["p5::prime-factors-of*"] = function(arg_1_0, arg_1_1) {
    var local_1_0, local_1_1, local_1_2, local_1_3, local_1_4, local_1_5, local_1_6;
    block_1_0: {
        block_1_1:for(;;) {
            local_1_1 = RT["poet::>"](arg_1_1, RT["poet::/"](arg_1_0, 2));
            if (local_1_1 != null && local_1_1 !== false) {
                local_1_0 = RT["poet::list"]([arg_1_0, 1]);
                break block_1_0;
            } else {
                local_1_2 = RT["poet::zero?"](RT["poet::mod"](arg_1_0, arg_1_1));
                if (local_1_2 != null && local_1_2 !== false) {
                    local_1_3 = RT["p5::defactor"](arg_1_0, arg_1_1, 0);
                    local_1_4 = local_1_3["0"];
                    local_1_5 = local_1_3["1"];
                    local_1_0 = RT["poet::cons"]([arg_1_1, local_1_5], RT["p5::prime-factors-of*"](local_1_4, RT["poet::inc"](arg_1_1)));
                    break block_1_0;
                } else {
                    local_1_6 = RT["poet::keyword"]("else");
                    if (local_1_6 != null && local_1_6 !== false) {
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

RT["p5::get-factors"] = function(arg_1_0) {
    var local_1_0, local_1_1, local_1_2, local_1_3, local_1_4, local_1_5;
    block_1_0: {
        local_1_1 = [];
        local_1_2 = function(arg_2_0) {
            var local_2_0, local_2_1, local_2_2, local_2_3;
            block_2_0: {
                local_2_2 = local_1_1[arg_2_0["0"]];
                local_2_3 = local_2_2;
                if (local_2_3 != null && local_2_3 !== false) {
                    local_2_1 = local_2_2;
                } else {
                    local_2_1 = 0;
                };
                local_1_1[arg_2_0["0"]] = RT["poet::Math"]["max"](local_2_1, arg_2_0["1"]);
                local_2_0 = local_1_1[arg_2_0["0"]];
            };
            return local_2_0;
        };
        local_1_3 = 2;
        local_1_4 = local_1_3;
        block_1_1: {
            block_1_2:for(;;) {
                local_1_5 = RT["poet::>="](local_1_4, arg_1_0);
                if (local_1_5 != null && local_1_5 !== false) {
                    break block_1_1;
                };
                RT["p5::prime-factors-of"](local_1_4)["forEach"](local_1_2);
                local_1_3 = RT["poet::inc"](local_1_4);
                local_1_4 = local_1_3;
            };
        };
        local_1_0 = local_1_1;
    };
    return local_1_0;
};

RT["p5::factors->number"] = function(arg_1_0) {
    var local_1_0, local_1_1, local_1_2, local_1_3, local_1_4, local_1_5;
    block_1_0: {
        local_1_1 = 1;
        local_1_2 = 0;
        local_1_3 = local_1_2;
        block_1_1: {
            block_1_2:for(;;) {
                local_1_4 = RT["poet::>="](local_1_3, arg_1_0["length"]);
                if (local_1_4 != null && local_1_4 !== false) {
                    break block_1_1;
                };
                local_1_5 = arg_1_0[local_1_3];
                if (local_1_5 != null && local_1_5 !== false) {
                    local_1_1 = RT["poet::*"](local_1_1, RT["poet::Math"]["pow"](local_1_3, arg_1_0[local_1_3]));
                };
                local_1_2 = RT["poet::inc"](local_1_3);
                local_1_3 = local_1_2;
            };
        };
        local_1_0 = local_1_1;
    };
    return local_1_0;
};

RT["p5::solve"] = function(arg_1_0) {
    var local_1_0;
    block_1_0: {
        local_1_0 = RT["p5::factors->number"](RT["p5::get-factors"](arg_1_0));
    };
    return local_1_0;
};

RT["poet::prn"](RT["p5::solve"](10));

RT["poet::prn"](RT["p5::solve"](20));