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

RT["p7::primes"] = [2];

RT["p7::count"] = 1;

RT["p7::current-number"] = 3;

RT["p7::reset!"] = function() {
    var local_1_0;
    block_1_0: {
        RT["p7::primes"] = [2];
        RT["p7::count"] = 1;
        RT["p7::current-number"] = 3;
        local_1_0 = RT["p7::current-number"];
    };
    return local_1_0;
};

RT["p7::divides?"] = function(arg_1_0, arg_1_1) {
    var local_1_0;
    block_1_0: {
        local_1_0 = RT["poet::zero?"](RT["poet::mod"](arg_1_1, arg_1_0));
    };
    return local_1_0;
};

RT["p7::prime?"] = function(arg_1_0) {
    var local_1_0;
    var flag_1_0 = true;
    try {
        block_1_0: {
            RT["poet::for-each"](function(arg_2_0) {
                var local_2_0, local_2_1;
                local_2_1 = RT["p7::divides?"](arg_2_0, arg_1_0);
                if (local_2_1 != null && local_2_1 !== false) {
                    local_1_0 = false;
                    flag_1_0 = false; throw "NON_LOCAL_EXIT";
                } else {
                    local_2_0 = null;
                };
                return local_2_0;
            }, RT["p7::primes"]);
            local_1_0 = true;
        }
    } catch (e) {
        if (flag_1_0) {
            throw e;
        }
    } finally {
        flag_1_0 = false
    };
    return local_1_0;
};

RT["p7::faster-prime?"] = function(arg_1_0) {
    var local_1_0, local_1_1, local_1_2, local_1_3;
    block_1_0: {
        local_1_1 = 0;
        block_1_1: {
            block_1_2:for(;;) {
                local_1_2 = RT["poet::>="](local_1_1, RT["p7::primes"]["length"]);
                if (local_1_2 != null && local_1_2 !== false) {
                    local_1_0 = true;
                    break block_1_1;
                };
                local_1_3 = RT["p7::divides?"](RT["p7::primes"][local_1_1], arg_1_0);
                if (local_1_3 != null && local_1_3 !== false) {
                    local_1_0 = false;
                    break block_1_0;
                };
                local_1_1 = RT["poet::inc"](local_1_1);
                local_1_0 = local_1_1;
            };
        };
    };
    return local_1_0;
};

RT["p7::next!"] = function() {
    var local_1_0, local_1_1;
    block_1_0: {
        local_1_1 = RT["p7::prime?"](RT["p7::current-number"]);
        if (local_1_1 != null && local_1_1 !== false) {
            RT["p7::primes"]["push"](RT["p7::current-number"]);
            RT["p7::count"] = RT["poet::+"](RT["p7::count"], 1);
        };
        RT["p7::current-number"] = RT["poet::+"](RT["p7::current-number"], 2);
        local_1_0 = RT["p7::current-number"];
    };
    return local_1_0;
};

RT["p7::faster-next!"] = function() {
    var local_1_0, local_1_1;
    block_1_0: {
        local_1_1 = RT["p7::faster-prime?"](RT["p7::current-number"]);
        if (local_1_1 != null && local_1_1 !== false) {
            RT["p7::primes"]["push"](RT["p7::current-number"]);
            RT["p7::count"] = RT["poet::+"](RT["p7::count"], 1);
        };
        RT["p7::current-number"] = RT["poet::+"](RT["p7::current-number"], 2);
        local_1_0 = RT["p7::current-number"];
    };
    return local_1_0;
};

RT["p7::nth-prime"] = function(arg_1_0) {
    var local_1_0, local_1_1;
    block_1_0: {
        block_1_1:for(;;) {
            local_1_1 = RT["poet::>="](RT["p7::count"], arg_1_0);
            if (local_1_1 != null && local_1_1 !== false) {
                local_1_0 = RT["p7::primes"][RT["poet::dec"](arg_1_0)];
                break block_1_1;
            };
            local_1_0 = RT["p7::next!"]();
        };
    };
    return local_1_0;
};

RT["p7::faster-nth-prime"] = function(arg_1_0) {
    var local_1_0, local_1_1;
    block_1_0: {
        block_1_1:for(;;) {
            local_1_1 = RT["poet::>="](RT["p7::count"], arg_1_0);
            if (local_1_1 != null && local_1_1 !== false) {
                local_1_0 = RT["p7::primes"][RT["poet::dec"](arg_1_0)];
                break block_1_1;
            };
            local_1_0 = RT["p7::faster-next!"]();
        };
    };
    return local_1_0;
};

RT["p7::reset!"]();

!(function() {
var local_0_0, local_0_1, local_0_2;
local_0_0 = new RT["poet::Date"]()["getTime"]();
local_0_1 = RT["p7::nth-prime"](10001);
local_0_2 = new RT["poet::Date"]()["getTime"]();
RT["poet::println"](RT["poet::/"](RT["poet::-"](local_0_2, local_0_0), 1000), "ms:", local_0_1);
})();

RT["p7::reset!"]();

!(function() {
var local_0_0, local_0_1, local_0_2;
local_0_0 = new RT["poet::Date"]()["getTime"]();
local_0_1 = RT["p7::nth-prime"](10001);
local_0_2 = new RT["poet::Date"]()["getTime"]();
RT["poet::println"](RT["poet::/"](RT["poet::-"](local_0_2, local_0_0), 1000), "ms:", local_0_1);
})();

RT["p7::reset!"]();

!(function() {
var local_0_0, local_0_1, local_0_2;
local_0_0 = new RT["poet::Date"]()["getTime"]();
local_0_1 = RT["p7::nth-prime"](10001);
local_0_2 = new RT["poet::Date"]()["getTime"]();
RT["poet::println"](RT["poet::/"](RT["poet::-"](local_0_2, local_0_0), 1000), "ms:", local_0_1);
})();

RT["p7::reset!"]();

!(function() {
var local_0_0, local_0_1, local_0_2;
local_0_0 = new RT["poet::Date"]()["getTime"]();
local_0_1 = RT["p7::faster-nth-prime"](10001);
local_0_2 = new RT["poet::Date"]()["getTime"]();
RT["poet::println"](RT["poet::/"](RT["poet::-"](local_0_2, local_0_0), 1000), "ms:", local_0_1);
})();

RT["p7::reset!"]();

!(function() {
var local_0_0, local_0_1, local_0_2;
local_0_0 = new RT["poet::Date"]()["getTime"]();
local_0_1 = RT["p7::faster-nth-prime"](10001);
local_0_2 = new RT["poet::Date"]()["getTime"]();
RT["poet::println"](RT["poet::/"](RT["poet::-"](local_0_2, local_0_0), 1000), "ms:", local_0_1);
})();

RT["p7::reset!"]();

!(function() {
var local_0_0, local_0_1, local_0_2;
local_0_0 = new RT["poet::Date"]()["getTime"]();
local_0_1 = RT["p7::faster-nth-prime"](10001);
local_0_2 = new RT["poet::Date"]()["getTime"]();
RT["poet::println"](RT["poet::/"](RT["poet::-"](local_0_2, local_0_0), 1000), "ms:", local_0_1);
})();