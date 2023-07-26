import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/users/entities/user.entity';
import { Common } from 'src/common/entities/common.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@ObjectType()
@Entity()
export class Todo extends Common {
  @ManyToOne(() => User, (user) => user.todos, { onDelete: 'CASCADE' })
  @Field(() => User)
  user: User;

  @Column()
  @Field(() => String)
  content: string;
}
