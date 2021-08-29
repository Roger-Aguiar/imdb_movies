"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_actor_dto_1 = require("./create-actor.dto");
class UpdateActorDto extends (0, mapped_types_1.PartialType)(create_actor_dto_1.CreateActorDto) {
}
exports.UpdateActorDto = UpdateActorDto;
//# sourceMappingURL=update-actor.dto.js.map