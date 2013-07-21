RT["poet/sequence::map"] = RT["poet::Generic"](RT["poet::object"](RT["poet::keyword"]("name"), RT["poet::symbol"]("map"), RT["poet::keyword"]("index"), 1));

RT["poet/sequence::filter"] = RT["poet::Generic"](RT["poet::object"](RT["poet::keyword"]("name"), RT["poet::symbol"]("filter"), RT["poet::keyword"]("index"), 1));

RT["poet/sequence::take"] = RT["poet::Generic"](RT["poet::object"](RT["poet::keyword"]("name"), RT["poet::symbol"]("take"), RT["poet::keyword"]("index"), 1));

RT["poet/sequence::drop"] = RT["poet::Generic"](RT["poet::object"](RT["poet::keyword"]("name"), RT["poet::symbol"]("drop"), RT["poet::keyword"]("index"), 1));

RT["poet/sequence::nth"] = RT["poet::Generic"](RT["poet::object"](RT["poet::keyword"]("name"), RT["poet::symbol"]("nth"), RT["poet::keyword"]("index"), 1));

RT["poet::Generic"]["addMethod"](RT["poet/sequence::take"], RT["poet::List"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = arg_1_0["take"](arg_1_1);
    return local_1_0;
});

RT["poet::Generic"]["addMethod"](RT["poet/sequence::drop"], RT["poet::List"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = arg_1_0["drop"](arg_1_1);
    return local_1_0;
});

RT["poet::Generic"]["addMethod"](RT["poet/sequence::map"], RT["poet::List"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = arg_1_1["map"](arg_1_0);
    return local_1_0;
});

RT["poet::Generic"]["addMethod"](RT["poet/sequence::filter"], RT["poet::List"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = arg_1_1["filter"](function(arg_2_0) {
        var local_2_0, local_2_1;
        local_2_1 = arg_1_0(arg_2_0);
        if (local_2_1 != null && local_2_1 !== false) {
            local_2_0 = true;
        } else {
            local_2_0 = false;
        };
        return local_2_0;
    });
    return local_1_0;
});

RT["poet::Generic"]["addMethod"](RT["poet/sequence::take"], RT["poet::Array"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = arg_1_1["slice"](0, arg_1_0);
    return local_1_0;
});

RT["poet::Generic"]["addMethod"](RT["poet/sequence::drop"], RT["poet::Array"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = arg_1_1["slice"](arg_1_0);
    return local_1_0;
});

RT["poet::Generic"]["addMethod"](RT["poet/sequence::map"], RT["poet::Array"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = arg_1_1["map"](function(arg_2_0) {
        var local_2_0;
        local_2_0 = arg_1_0(arg_2_0);
        return local_2_0;
    });
    return local_1_0;
});

RT["poet::Generic"]["addMethod"](RT["poet/sequence::filter"], RT["poet::Array"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = arg_1_1["filter"](function(arg_2_0) {
        var local_2_0, local_2_1;
        local_2_1 = arg_1_0(arg_2_0);
        if (local_2_1 != null && local_2_1 !== false) {
            local_2_0 = true;
        } else {
            local_2_0 = false;
        };
        return local_2_0;
    });
    return local_1_0;
});

RT["p6::nums"] = RT["poet::range"](100);

RT["p6::square"] = function(arg_1_0) {
    var local_1_0;
    block_1_0: {
        local_1_0 = RT["poet::*"](arg_1_0, arg_1_0);
    };
    return local_1_0;
};

RT["p6::sum-of-squares"] = function(arg_1_0) {
    var local_1_0;
    block_1_0: {
        local_1_0 = RT["poet::reduce"](RT["poet::+"], RT["poet/sequence::map"](RT["p6::square"], arg_1_0));
    };
    return local_1_0;
};

RT["p6::square-of-sum"] = function(arg_1_0) {
    var local_1_0;
    block_1_0: {
        local_1_0 = RT["p6::square"](RT["poet::reduce"](RT["poet::+"], arg_1_0));
    };
    return local_1_0;
};

RT["poet::prn"](RT["p6::nums"]);

RT["poet::prn"](RT["p6::sum-of-squares"](RT["p6::nums"]));

RT["poet::prn"](RT["p6::square-of-sum"](RT["p6::nums"]));

RT["poet::prn"](RT["poet::-"](RT["p6::sum-of-squares"](RT["p6::nums"]), RT["p6::square-of-sum"](RT["p6::nums"])));