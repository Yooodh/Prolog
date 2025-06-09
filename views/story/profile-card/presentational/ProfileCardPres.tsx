// package
import Image from 'next/image';

// slice
import { SubscribeUser, User } from '../types';
import styles from '../styles/ProfileCardPres.module.scss';

// layer
import { useModalStore } from '@/shared/stores/useModalStore';
import SubscriptionCont from '@/features/subscription/container/SubscriptionCont';
import SubscriptionListCont from '@/features/subscription-list/container/SubscriptionListCont';

type UserProps = {
  userData: User;
  followerList: SubscribeUser;
  followList: SubscribeUser;
  userId: string;
  currentId: string;
  onFollowStatusChange: (isFollowing: boolean) => void;
};

export default function ProfileCardPres({
  userData,
  userId,
  followList,
  followerList,
  currentId,
  onFollowStatusChange,
}: UserProps) {
  const openModal = useModalStore((state) => state.action.open);

  const backgroundStyle = userData?.backgroundImg
    ? ({
        '--bg-image': `url(${userData.backgroundImg})`,
      } as React.CSSProperties)
    : {};

  return (
    <div className={styles.profileCardContainer}>
      {/* 배경 영역 */}
      <div
        className={`${styles.cardBackGroundBox} ${
          userData?.backgroundImg ? styles.hasBackground : ''
        }`}
        style={backgroundStyle}
      >
        {/* 프로필 이미지 */}
        <div className={styles.profileImg}>
          <Image
            className={styles.mobileProfile}
            src={userData?.profileImg || '/svgs/profile.svg'}
            alt={userData?.profileImg ? '프로필 이미지' : '기본 프로필'}
            width={80}
            height={80}
          />
        </div>
      </div>

      {/* 본문 영역 */}
      <div>
        <div className={styles.userFlexBox}>
          <div className={styles.userInfo}>
            <h2 className={styles.nameText}>{userData?.name}</h2>
            <div>
              {userId === currentId && currentId ? (
                <div style={{ display: 'none' }}></div>
              ) : (
                <SubscriptionCont
                  userId={userId}
                  onFollowStatusChange={onFollowStatusChange}
                />
              )}
            </div>
          </div>
          <div className={styles.followContainer}>
            <button
              className={styles.followText}
              onClick={() => {
                openModal(
                  <SubscriptionListCont
                    followList={followList}
                    followerList={followerList}
                    isFollow={true}
                  />,
                  'center',
                );
              }}
            >
              팔로워
              <span className={styles.followNumberText}>
                {followerList?.totalCount ?? 0}
              </span>
            </button>
            <button
              className={styles.followText}
              onClick={() => {
                openModal(
                  <SubscriptionListCont
                    followList={followList}
                    followerList={followerList}
                    isFollow={false}
                  />,
                  'center',
                );
              }}
            >
              팔로잉
              <span className={styles.followNumberText}>
                {followList?.totalCount ?? 0}
              </span>
            </button>
          </div>
        </div>

        <div className={styles.infoContent}>
          <p>
            {userData?.introduction ?? '자신을 소개하는 글을 작성해주세요.'}
          </p>
        </div>
      </div>
    </div>
  );
}
