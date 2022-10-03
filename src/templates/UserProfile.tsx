import User from 'src/modules/feed/User';

const UserProfile = () => {
  return (
    <div>
      <User
        userInfo={{
          profileImage:
            'https://cdn.ggumim.co.kr/storage/20220404111013xGLztEbcjz.png'
        }}
      />
    </div>
  );
};

export default UserProfile;
