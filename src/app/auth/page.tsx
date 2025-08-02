import AuthForm from "@/auth/auth-form";
import PermissionsWrapper, { AdminComponent, AdminOrViewerComponent, ViewerComponent} from "@/components/security/permissions-wrapper";

export default function Page() {

  const viewerPermissions = [ 'viewer' ];
  const adminPermissions = [ 'admin' ];
  const openPermissions = [ 'viewer', 'admin' ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <PermissionsWrapper permissions={viewerPermissions}>
        <ViewerComponent></ViewerComponent>
      </PermissionsWrapper>

      <PermissionsWrapper permissions={adminPermissions}>
        <AdminComponent></AdminComponent>
      </PermissionsWrapper>

      <PermissionsWrapper permissions={openPermissions}>
        <AdminOrViewerComponent></AdminOrViewerComponent>
      </PermissionsWrapper>

      <AuthForm></AuthForm>
    </div>
  );
}
