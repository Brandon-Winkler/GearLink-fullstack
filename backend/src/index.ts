import { Gear } from './gear/gear.entity';
import { User } from './user/user.entity';
import { ImgUrl } from './ImgUrl/ImgUrl.entity';
import { SessionEntity } from './sessions/session.entity';

const entities = [Gear, User, ImgUrl, SessionEntity];

export { Gear, User, ImgUrl, SessionEntity };
export default entities;