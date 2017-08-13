"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("5 digits number transfer into symbol string:", function(){
        var num = 95713;
        var result = main(num);
        var expect_string = '||:|:::|:|:|:::|:::||::||::|:|:|';
        //var expect_string = '';
        expect(expect_string).to.equal(result);
    });

    it("9 digits number transfer into symbol string:", function(){
        var num = 987654321;
        var result = main(num);

        var expect_string = '||:|::|::|:|:::|:||:::|:|::|::|::||:::|:|:::||:|:|:|';
        //var expect_string = '';
        expect(expect_string).to.equal(result);
    });

    it("10 digits number transfer into symbol string:", function(){
        var num = '98765-4321';
        var result = main(num);

        var expect_string = '||:|::|::|:|:::|:||:::|:|::|::|::||:::|:|:::||:|:|:|';
        //var expect_string = '';
        expect(expect_string).to.equal(result);
    });

    it("symbol string transfer into number #10 digits#", function(){
        var num = '||:|::|::|:|:::|:||:::|:|::|::|::||:::|:|:::||:|:|:|';
        var result = main(num);

        var expect_string = '987654321';
        //var expect_string = '';
        expect(expect_string).to.equal(result);
    });

    it("symbol string transfer into number #5 digits#", function(){
        var num = '||:|:::|:|:|:::|:::||::||::|:|:|';
        var result = main(num);

        var expect_string = '95713';
        //var expect_string = '';
        expect(expect_string).to.equal(result);
    });
});