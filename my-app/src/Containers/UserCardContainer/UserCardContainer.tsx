import { connect, MapStateToProps } from 'react-redux';
import { IInitialState } from '../../redux/model'

import UserCard, { UserCardStateProps } from '../../Components/UserCard/UserCard'

export const mapStateToProps: MapStateToProps<UserCardStateProps, {}, IInitialState> = state => state.client

export const UserCardContainer = connect(mapStateToProps)(UserCard)

export default UserCardContainer