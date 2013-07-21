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

RT["poet::Generic"]["addMethod"](RT["poet/sequence::take"], RT["poet::String"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = 0["substring"](arg_1_0, arg_1_1);
    return local_1_0;
});

RT["poet::Generic"]["addMethod"](RT["poet/sequence::drop"], RT["poet::String"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = arg_1_0["substring"](arg_1_1);
    return local_1_0;
});

RT["poet::Generic"]["addMethod"](RT["poet/sequence::map"], RT["poet::String"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = RT["poet/sequence::xs,"](function(arg_2_0) {
        var local_2_0;
        local_2_0 = arg_1_0(arg_2_0);
        return local_2_0;
    });
    return local_1_0;
});

RT["poet::Generic"]["addMethod"](RT["poet/sequence::filter"], RT["poet::String"], function(arg_1_0, arg_1_1) {
    var local_1_0;
    local_1_0 = RT["poet/sequence::xs,"](function(arg_2_0) {
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

RT["p8::number-string"] = "\n73167176531330624919225119674426574742355349194934\n96983520312774506326239578318016984801869478851843\n85861560789112949495459501737958331952853208805511\n12540698747158523863050715693290963295227443043557\n66896648950445244523161731856403098711121722383113\n62229893423380308135336276614282806444486645238749\n30358907296290491560440772390713810515859307960866\n70172427121883998797908792274921901699720888093776\n65727333001053367881220235421809751254540594752243\n52584907711670556013604839586446706324415722155397\n53697817977846174064955149290862569321978468622482\n83972241375657056057490261407972968652414535100474\n82166370484403199890008895243450658541227588666881\n16427171479924442928230863465674813919123162824586\n17866458359124566529476545682848912883142607690042\n24219022671055626321111109370544217506941658960408\n07198403850962455444362981230987879927244284909188\n84580156166097919133875499200524063689912560717606\n05886116467109405077541002256983155200055935729725\n71636269561882670428252483600823257530420752963450\n";

RT["p8::numeric-regex"] = new RT["poet::RegExp"]("\\d");

!(function() {
var local_0_0;
local_0_0 = [];
RT["poet::for-each"](function(arg_1_0) {
    var local_1_0, local_1_1;
    local_1_1 = RT["p8::numeric-regex"]["test"](arg_1_0);
    if (local_1_1 != null && local_1_1 !== false) {
        local_1_0 = local_0_0["push"](RT["poet::parseInt"](arg_1_0, 10));
    } else {
        local_1_0 = null;
    };
    return local_1_0;
}, RT["p8::number-string"]);
RT["p8::numbers"] = local_0_0;
})();

RT["p8::unfold"] = function(arg_1_0, arg_1_1) {
    var local_1_0, local_1_1, local_1_2, local_1_3;
    block_1_0: {
        local_1_1 = [];
        block_1_1:for(;;) {
            local_1_2 = arg_1_1(arg_1_0);
            local_1_3 = local_1_2;
            if (local_1_3 != null && local_1_3 !== false) {
                local_1_1["push"](local_1_2[0]);
                arg_1_0 = local_1_2[1];
                local_1_0 = arg_1_0;
            } else {
                local_1_0 = local_1_1;
                break block_1_1;
            };
        };
    };
    return local_1_0;
};

RT["p8::groups"] = RT["p8::unfold"](RT["p8::numbers"], function(arg_1_0) {
    var local_1_0, local_1_1;
    local_1_1 = RT["poet::>="](arg_1_0["length"], 5);
    if (local_1_1 != null && local_1_1 !== false) {
        local_1_0 = [RT["poet/sequence::take"](5, arg_1_0), RT["poet/sequence::drop"](1, arg_1_0)];
    } else {
        local_1_0 = null;
    };
    return local_1_0;
});

RT["p8::high-score"] = RT["poet::-infinity"];

RT["p8::winner"] = null;

RT["poet::for-each"](function(arg_1_0) {
    var local_1_0, local_1_1, local_1_2;
    local_1_1 = RT["poet::reduce"](RT["poet::*"], arg_1_0);
    local_1_2 = RT["poet::>"](local_1_1, RT["p8::high-score"]);
    if (local_1_2 != null && local_1_2 !== false) {
        RT["p8::high-score"] = local_1_1;
        RT["p8::winner"] = arg_1_0;
        local_1_0 = RT["p8::winner"];
    } else {
        local_1_0 = null;
    };
    return local_1_0;
}, RT["p8::groups"]);

RT["poet::prn"](RT["p8::high-score"]);

RT["poet::prn"](RT["p8::winner"]);