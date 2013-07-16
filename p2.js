RT["p2::sum"] = 0;

RT["p2::r1"] = 1;

RT["p2::r2"] = 2;

RT["p2::next-fib"] = function() {
    var local_1_0, local_1_1;
    block_1_0: {
        local_1_1 = RT["poet::+"](RT["p2::r1"], RT["p2::r2"]);
        RT["p2::r1"] = RT["p2::r2"];
        RT["p2::r2"] = local_1_1;
        local_1_0 = local_1_1;
    };
    return local_1_0;
};

RT["p2::solve"] = function(arg_1_0) {
    var local_1_0, local_1_1, local_1_2, local_1_3, local_1_4;
    block_1_0: {
        local_1_1 = 2;
        block_1_1:for(;;) {
            local_1_2 = RT["p2::next-fib"]();
            local_1_3 = RT["poet::>"](local_1_2, arg_1_0);
            if (local_1_3 != null && local_1_3 !== false) {
                local_1_0 = local_1_1;
                break block_1_0;
            };
            local_1_4 = RT["poet::="](0, RT["poet::mod"](local_1_2, 2));
            if (local_1_4 != null && local_1_4 !== false) {
                local_1_1 = RT["poet::+"](local_1_1, local_1_2);
                local_1_0 = local_1_1;
            } else {
                local_1_0 = null;
            };
        };
    };
    return local_1_0;
};

RT["p2::max"] = RT["poet::*"](4, 1000, 1000);

RT["poet::prn"](RT["p2::max"]);

RT["poet::prn"](RT["p2::solve"](RT["p2::max"]));