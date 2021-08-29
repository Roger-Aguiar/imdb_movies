"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorsService = void 0;
const common_1 = require("@nestjs/common");
let ActorsService = class ActorsService {
    constructor() {
        this.actors = [
            {
                "id": 1,
                "actor": "Jean-Claude Van Damme",
                "born": " October 18, 1960",
                "country": "Belgium",
                "imdb_link": "https://www.imdb.com/name/nm0000241/",
                "as_actor": 75,
                "as_producer": 12,
                "as_director": 0
            },
            {
                "id": 2,
                "actor": "Arnold Schwarzenegger",
                "born": "July 30, 1947",
                "country": "Australia",
                "imdb_link": "https://www.imdb.com/name/nm0000216/",
                "as_actor": 79,
                "as_producer": 13,
                "as_director": 2
            },
            {
                "id": 3,
                "actor": "Denzel Washington",
                "born": "December 28, 1954",
                "country": "USA",
                "imdb_link": "https://www.imdb.com/name/nm0000243/?ref_=nv_sr_srsg_0",
                "as_actor": 61,
                "as_producer": 13,
                "as_director": 5
            }
        ];
    }
    create(createActorDto) {
        return `Id: ${createActorDto.id}
            Actor: ${createActorDto.actor}
            Born: ${createActorDto.born}
            Country: ${createActorDto.country}
            Imdb link: ${createActorDto.imdb_link}
            As actor: ${createActorDto.as_actor}
            As producer: ${createActorDto.as_producer}
            As director: ${createActorDto.as_director}`;
    }
    findAll() {
        return this.actors;
    }
    findOne(id) {
        return this.actors.find(actor => actor.id == id);
    }
    update(id, updateActorDto) {
        if (updateActorDto.id == id) {
            return `Id: ${updateActorDto.id}
            Actor: ${updateActorDto.actor}
            Born: ${updateActorDto.born}
            Country: ${updateActorDto.country}
            Imdb link: ${updateActorDto.imdb_link}
            As actor: ${updateActorDto.as_actor}
            As producer: ${updateActorDto.as_producer}
            As director: ${updateActorDto.as_director}`;
        }
        else {
            return 'Not found actor.';
        }
    }
    remove(id) {
        let actorsCopy = this.actors;
        actorsCopy.splice(id);
        return actorsCopy;
    }
};
ActorsService = __decorate([
    (0, common_1.Injectable)()
], ActorsService);
exports.ActorsService = ActorsService;
//# sourceMappingURL=actors.service.js.map