import {
  Button,
  Divider,
  Form,
  Space,
  Spin,
  Tooltip,
  Typography,
} from '@douyinfe/semi-ui';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as local from '@/util/local';
import * as headers from '@/util/headers';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import {
  IconGithubLogo,
  IconTiktokLogo,
  IconWeibo,
} from '@douyinfe/semi-icons';
import useAuthApi, { Captcha } from '@/api/system/auth';
import { IconWechat } from '@/components/Icon/collection/IconWechat';
import { IconWechatEnterprise } from '@/components/Icon/collection/IconWechatEnterprise';
import { IconGitee } from '@/components/Icon/collection/IconGitee';
import { IconBaidu } from '@/components/Icon/collection/IconBaidu';
import { IconQQ } from '@/components/Icon/collection/IconQQ';
import useOAuth2Api from '@/api/system/oauth2';
import { IconTaobao } from '@/components/Icon/collection/IconTaobao';
import useRequest from '@/hook/request';

const LoginForm: React.FC<{ tenantId: string }> = ({ tenantId }) => {
  const navigate = useNavigate();
  const authApi = useAuthApi();
  const oauth2Api = useOAuth2Api();
  const request = useRequest();
  const [loading, setLoading] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<Captcha | undefined>();

  useEffect(() => {
    authApi.captcha().then((res) => setCaptcha(res.data as Captcha));
  }, []);

  const reloadCaptcha = () => {
    authApi.captcha().then((res) => {
      setCaptcha(res.data);
    });
  };

  return (
    <>
      <Typography.Title
        heading={5}
        color="blue-gray"
        className="absolute top-5"
      >
        登陆
      </Typography.Title>
      <div className="w-4/5">
        <Spin spinning={loading}>
          <Form
            onSubmit={async (data) => {
              setLoading(true);
              authApi
                .login({
                  ...data,
                  captchaId: captcha?.captchaId,
                  tenant: tenantId,
                })
                .then((res) => {
                  if (res.code !== 200) {
                    reloadCaptcha();
                  } else {
                    // 设置local storage
                    const token = res.data?.tokenValue || '';
                    local.set(headers.Authentication, token as string);
                    // 跳转至首页
                    navigate('/');
                  }
                  setLoading(false);
                })
                .catch((err) => {
                  reloadCaptcha();
                  setLoading(false);
                });
            }}
            labelPosition="left"
          >
            <Form.Input
              field="username"
              label="账号"
              placeholder="请输入账号"
              rules={[{ required: true, message: '请输入账号' }]}
            />
            <Form.Input
              field="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              mode="password"
              rules={[{ required: true, message: '请输入密码' }]}
            />
            <div className="flex">
              <Form.Input
                field="captcha"
                label="验证码"
                placeholder="请输入验证码"
                maxLength={4}
                rules={[{ required: true, message: '请输入验证码' }]}
              />
              <Tooltip content="刷新验证码">
                <img
                  src={captcha?.base64 || ''}
                  className="w-24 h-12 ml-auto max-w-24"
                  onClick={reloadCaptcha}
                />
              </Tooltip>
            </div>
            <div className="flex items-center align-middle">
              <Button
                style={{ marginRight: 'auto' }}
                size="large"
                theme="borderless"
              >
                短信登录
              </Button>
              <Button
                style={{ marginLeft: 'auto' }}
                size="large"
                theme="borderless"
              >
                忘记密码?
              </Button>
            </div>
            <Button
              className="mt-2 relative"
              block
              size="large"
              htmlType="submit"
            >
              登陆
            </Button>
          </Form>
        </Spin>
        <div className="gap-2 flex flex-col m-5 items-center">
          <Divider>
            <Text type="tertiary">第三方登录</Text>
          </Divider>
          <Space align="center" spacing={20}>
            <Tooltip content="github">
              <Button
                theme="borderless"
                icon={<IconGithubLogo size="large" />}
                onClick={async () => {
                  const response = await fetch(
                    'https://github.com/login/oauth/authorize?response_type=code&client_id=bd1d756a53ca039c1675&scope=read:user&state=h2GWejiwL5xxAL6jZsG2ycmyZdwxiHEoQ2IYksMtuyY%3D&redirect_uri=http://localhost:8600/oauth2/code/login/github',
                  );
                }}
              />
            </Tooltip>
            <Tooltip content="weibo">
              <Button
                theme="borderless"
                icon={<IconWeibo size="large" />}
                onClick={() => oauth2Api.authorization('weibo')}
              />
            </Tooltip>
            <Tooltip content="wechat">
              <Button
                theme="borderless"
                icon={<IconWechat size="large" />}
                onClick={() => oauth2Api.authorization('wechat-mp')}
              />
            </Tooltip>
            <Tooltip content="wechat-enterprise">
              <Button
                theme="borderless"
                icon={<IconWechatEnterprise size="large" />}
                onClick={() => oauth2Api.authorization('wechat-enterprise')}
              />
            </Tooltip>
            <Tooltip content="gitee">
              <Button
                theme="borderless"
                icon={<IconGitee size="large" />}
                onClick={() => oauth2Api.authorization('gitee')}
              />
            </Tooltip>
            <Tooltip content="baidu">
              <Button
                theme="borderless"
                icon={<IconBaidu size="large" />}
                onClick={() => oauth2Api.authorization('baidu')}
              />
            </Tooltip>
            <Tooltip content="qq">
              <Button
                theme="borderless"
                icon={<IconQQ size="large" />}
                onClick={() => oauth2Api.authorization('qq')}
              />
            </Tooltip>
            <Tooltip content="tiktok">
              <Button
                theme="borderless"
                icon={<IconTiktokLogo size="large" />}
                onClick={() => oauth2Api.authorization('tiktok')}
              />
            </Tooltip>
            <Tooltip content="taobao">
              <Button
                theme="borderless"
                icon={<IconTaobao size="large" />}
                onClick={() => oauth2Api.authorization('taobao')}
              />
            </Tooltip>
          </Space>
        </div>
      </div>
    </>
  );
};

export default LoginForm;