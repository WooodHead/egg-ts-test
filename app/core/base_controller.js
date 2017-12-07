"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
// const Controller = require('egg').Controller;
const CError = require("../common/CError");
const Constants = require("../constant");
class BaseController extends egg_1.Controller {
    constructor() {
        // abstract Register(app: Application);
        super(...arguments);
        this.handleError = fn => (...args) => fn(...args).catch(args[2]);
    }
    returnCreated(res, data) {
        const { ctx } = this;
        // 设置响应内容和响应状态码
        ctx.status = 201;
        ctx.body = res.set(data);
    }
    returnData(res, data) {
        const { ctx } = this;
        ctx.status = 200;
        ctx.body = res.set(data);
    }
    returnBadRequest(res, err) {
        const { ctx } = this;
        ctx.status = 400;
        ctx.body = res;
        ctx.throw(404, err);
    }
    returnNotAllowed(res) {
        const { ctx } = this;
        ctx.status = 405;
        ctx.body = res;
        ctx.throw(405, new CError(Constants.ErrorCodes.System.NotAllowed));
    }
    returnNotFound(res) {
        const { ctx } = this;
        ctx.status = 404;
        ctx.body = res;
        ctx.throw(404, new CError(Constants.ErrorCodes.System.NotFound));
    }
    returnUnAuthenticated(res) {
        const { ctx } = this;
        ctx.status = 401;
        ctx.body = res;
        ctx.throw(401, new CError(Constants.ErrorCodes.System.UnAuthenticated));
    }
    returnServerError(res, err) {
        const { ctx } = this;
        ctx.status = 500;
        ctx.body = res;
        ctx.throw(500, CError.clone(err));
    }
    returnValidationErrors(res, err) {
        const { ctx } = this;
        ctx.status = 400;
        ctx.body = res;
        ctx.throw(400, CError.clone(err));
    }
    checkValidationErrors(req, res, next) {
        let errors = req.validationErrors();
        if (errors) {
            this.returnValidationErrors(res, errors);
        }
        else {
            next();
        }
    }
}
module.exports = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV9jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZV9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTJDO0FBQzNDLGdEQUFnRDtBQUNoRCwyQ0FBNEM7QUFDNUMseUNBQXlDO0FBRXpDLG9CQUFxQixTQUFRLGdCQUFVO0lBQXZDO1FBQ0UsdUNBQXVDOztRQWtFdkMsZ0JBQVcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUU3RCxDQUFDO0lBbEVDLGFBQWEsQ0FBQyxHQUFhLEVBQUUsSUFBSTtRQUMvQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGVBQWU7UUFDZixHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNqQixHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLFVBQVUsQ0FBQyxHQUFhLEVBQUUsSUFBSTtRQUNuQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsR0FBYSxFQUFFLEdBQVc7UUFDekMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNyQixHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNqQixHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNmLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FB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