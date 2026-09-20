import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Mail, Phone, Plus, SquarePen, Check, X } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { ToggleRow } from '../components/ToggleRow';
import { personalSchema, type PersonalInfoValues } from '../schemas/profile.schema';
import usePersonalInfo from '../hooks/usePersonalInfo';
import useUser from '../hooks/useUser';
import useUpdateUser from '../hooks/useUpdateUser';
import CartSkeleton from '@/features/cart/components/cartSkeleton';
import { ErrorState } from '@/components/common/ErrorState';

const languageOptions = [
  { value: 'en-US', label: 'English (US)' },
  { value: 'ar-EG', label: 'Arabic' },
  { value: 'fr-FR', label: 'French' },
];

export function PersonalInfo() {
  const { data: response, isLoading, isError, error } = usePersonalInfo();
  const { data: userResponse, isLoading: isUserLoading } = useUser();
  const updateUserMutation = useUpdateUser();

  const personalInfo = response?.data;
  const user = userResponse?.data;

  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState({
    orderConfirmation: false,
    orderShipped: false,
    deliveryUpdates: false,
    outOfStockAlerts: false,
    cartReminders: false,
    paymentBilling: false,
    accountSecurity: false,
    emailNotifications: false,
    smsNotifications: false,
    pushNotifications: false,
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<PersonalInfoValues>({
    resolver: zodResolver(personalSchema),
    values: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      language: 'en-US',
    },
  });


  useEffect(() => {
    if (user && personalInfo) {
      reset({
        firstName: user.name || '',
        lastName: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        language:
          personalInfo.settings.language === 'ar' ? 'ar-EG' : 'en-US',
      });
    }
  }, [user, personalInfo, reset]);


  useEffect(() => {
    if (personalInfo) {
      setNotifications({
        orderConfirmation: personalInfo.notification_preferences.order_confirmation,
        orderShipped: personalInfo.notification_preferences.order_shipped,
        deliveryUpdates: personalInfo.notification_preferences.delivery_updates,
        outOfStockAlerts: personalInfo.notification_preferences.out_of_stock_alerts,
        cartReminders: personalInfo.notification_preferences.cart_reminders,
        paymentBilling: personalInfo.notification_preferences.payment_billing_notifications,
        accountSecurity: personalInfo.notification_preferences.account_security_alerts,
        emailNotifications: personalInfo.notification_preferences.email_notifications,
        smsNotifications: personalInfo.notification_preferences.sms_notifications,
        pushNotifications: personalInfo.notification_preferences.push_notifications,
      });
    }
  }, [personalInfo]);

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const onSubmit = (data: PersonalInfoValues) => {
    const name = `${data.firstName} ${data.lastName}`.trim();
    updateUserMutation.mutate(
      { name },
      { onSuccess: () => setIsEditing(false) }
    );
  };

  if (isLoading || isUserLoading) return <CartSkeleton />;
  if (isError) return <ErrorState description={error.message} />;

  return (
    <div className="w-full space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-[#000000] text-xl font-medium">Personal Information</h1>
        <p className="text-[#4A5565] text-sm leading-tight">
          Manage your personal details and preferences {!isUserLoading && userResponse?.data?.email}
        </p>
      </div>

      {/* Profile Picture */}
      <div className="space-y-3">
        <h2 className="text-[#000000] text-base font-medium">Profile Picture</h2>
        <div className="flex items-center gap-4">
          <img
            src="/Picture.svg"
            alt="Avatar"
            className="h-20 w-20 rounded-full object-cover"
          />
          <div className="space-y-1">
            <Button
              type="button"
              className="bg-[--app-main] hover:bg-[#01334e] text-[#F7FCFF] gap-2 h-10 px-4 rounded-lg"
            >
              <Plus className="h-4 w-4" />
              <span>Upload New Photo</span>
            </Button>
            <p className="pt-2 text-[#8C8881] text-sm">JPG, PNG or GIF. Max size 5MB</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <div className="border border-[#DAD8D8] rounded-md p-6 space-y-6 bg-white">
          <div className="flex justify-between items-center">
            <h3 className="text-[#000000] text-lg font-medium">Basic Information</h3>
            {isEditing ? (
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  className="bg-[#F0F0F0] text-[#0E1112] hover:bg-[#e4e4e4] gap-2 h-9 px-3"
                  onClick={() => setIsEditing(false)}
                  disabled={updateUserMutation.isPending}
                >
                  <X className="h-4 w-4" />
                  <span>Cancel</span>
                </Button>
                <Button
                  type="submit"
                  className="bg-[--app-main] hover:bg-[#01334e] text-[#F7FCFF] gap-2 h-9 px-3"
                  disabled={updateUserMutation.isPending || !isDirty}
                >
                  <Check className="h-4 w-4" />
                  <span>{updateUserMutation.isPending ? 'Saving...' : 'Save'}</span>
                </Button>
              </div>
            ) : (
              <Button
                type="button"
                variant="secondary"
                className="bg-[#F0F0F0] text-[#0E1112] hover:bg-[#e4e4e4] gap-2 h-9 px-3"
                onClick={() => setIsEditing(true)}
              >
                <SquarePen className="h-4 w-4" />
                <span>Edit</span>
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      {...field}
                      id="firstName"
                      placeholder="First name"
                      className="pl-9"
                      disabled={!isEditing}
                    />
                  </div>
                )}
              />
              {errors.firstName && (
                <p className="text-xs text-destructive">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      {...field}
                      id="lastName"
                      placeholder="Last name"
                      className="pl-9"
                      disabled={!isEditing}
                    />
                  </div>
                )}
              />
              {errors.lastName && (
                <p className="text-xs text-destructive">{errors.lastName.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Email address"
                      className="pl-9"
                      disabled={!isEditing}
                    />
                  </div>
                )}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      {...field}
                      id="phone"
                      placeholder="Phone number"
                      className="pl-9"
                      disabled={!isEditing}
                    />
                  </div>
                )}
              />
              {errors.phone && (
                <p className="text-xs text-destructive">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="border border-[#DAD8D8] rounded-md p-6 space-y-4 bg-white">
          <h3 className="text-[#000000] text-lg font-medium">Language</h3>
          <div className="space-y-2 max-w-[344px]">
            <Label htmlFor="language">Preferred Language</Label>
            <Controller
              name="language"
              control={control}
              render={({ field }) => (
                <Select
                  id="language"
                  options={languageOptions}
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full"
                />
              )}
            />
            {errors.language && (
              <p className="text-xs text-destructive">{errors.language.message}</p>
            )}
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="border border-[#DAD8D8] rounded-md p-6 space-y-6 bg-white">
          <div>
            <h3 className="text-[#000000] text-lg font-medium">Notification Preference</h3>
            <p className="text-[#0000007A] font-normal text-sm">
              Manage notification based on your preference
            </p>
          </div>

          {/* Order & Delivery Updates */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-900">Order & Delivery Updates</h4>
            <div className="bg-[#F7FCFF] rounded-sm p-4 space-y-4">
              <ToggleRow
                label="Order Confirmation"
                checked={notifications.orderConfirmation}
                onToggle={() => toggleNotification('orderConfirmation')}
              />
              <ToggleRow
                label="Order Shipped"
                checked={notifications.orderShipped}
                onToggle={() => toggleNotification('orderShipped')}
              />
              <ToggleRow
                label="Delivery Updates"
                checked={notifications.deliveryUpdates}
                onToggle={() => toggleNotification('deliveryUpdates')}
              />
              <ToggleRow
                label="Out-of-Stock Alerts"
                checked={notifications.outOfStockAlerts}
                onToggle={() => toggleNotification('outOfStockAlerts')}
                showBorder={false}
              />
            </div>
          </div>

          {/* Account & Reminders */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-900">Account & Reminders</h4>
            <div className="bg-[#F7FCFF] rounded-sm p-4 space-y-4">
              <ToggleRow
                label="Cart Reminders"
                checked={notifications.cartReminders}
                onToggle={() => toggleNotification('cartReminders')}
              />
              <ToggleRow
                label="Payment & Billing Notifications"
                checked={notifications.paymentBilling}
                onToggle={() => toggleNotification('paymentBilling')}
              />
              <ToggleRow
                label="Account Security Alerts"
                checked={notifications.accountSecurity}
                onToggle={() => toggleNotification('accountSecurity')}
                showBorder={false}
              />
            </div>
          </div>

          {/* Communication Channels */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-900">Communication Channels</h4>
            <div className="bg-[#F7FCFF] rounded-sm p-4 space-y-4">
              <ToggleRow
                label="Email Notifications"
                checked={notifications.emailNotifications}
                onToggle={() => toggleNotification('emailNotifications')}
              />
              <ToggleRow
                label="SMS Notifications"
                checked={notifications.smsNotifications}
                onToggle={() => toggleNotification('smsNotifications')}
              />
              <ToggleRow
                label="Push Notifications"
                checked={notifications.pushNotifications}
                onToggle={() => toggleNotification('pushNotifications')}
                showBorder={false}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
