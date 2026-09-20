import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Mail, Phone, Plus, SquarePen } from 'lucide-react';

// UI Components
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Select } from '@/components/ui/Select';
import { personalSchema, type PersonalInfoValues } from '../schemas/profile.schema';
import usePersonalInfo from '../hooks/usePersonalInfo';
import CartSkeleton from '@/features/cart/components/cartSkeleton';
import { ErrorState } from '@/components/common/ErrorState';


export function PersonalInfo() {
  const { data: response, isLoading, isError, error } = usePersonalInfo();
  const personalInfo = response?.data;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PersonalInfoValues>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      language: 'en-US',
    },
  });

  useEffect(() => {
    if (personalInfo) {
      reset({
        firstName: 'Sarah',
        lastName: 'Emad',
        email: 'Sarahem@gmail.com',
        phone: '+20 112 345 9876',
        language: personalInfo.settings.language === 'ar' ? 'ar-EG' : 'en-US',
      });
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
  }, [personalInfo, reset]);

  // State 
  const [notifications, setNotifications] = useState({
    orderConfirmation: false,
    orderShipped: true,
    deliveryUpdates: false,
    outOfStockAlerts: true,
    cartReminders: false,
    paymentBilling: true,
    accountSecurity: false,
    emailNotifications: false,
    smsNotifications: true,
    pushNotifications: false,
  });

  const toggleSwitch = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const onSubmit = (data: PersonalInfoValues) => {
    console.log('Submitted Personal Info:', data);
  };

  const languageOptions = [
    { value: 'en-US', label: 'English (US)' },
    { value: 'ar-EG', label: 'Arabic (مصر)' },
    { value: 'fr-FR', label: 'French' },
  ];

  if (isLoading) {
    return <CartSkeleton />;
  }

  if (isError) {
    return <ErrorState description={error.message} />;
  }

  return (
    <div className="w-full space-y-6">
      {/* 1. Page Header */}
      <div>
        <h1 className="text-[#000000] text-xl font-medium">Personal Information</h1>
        <p className="text-[#4A5565] text-sm leading-tight">
          Manage your personal details and preferences
        </p>
      </div>

      {/* 2. Profile Picture Section */}
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

      {/* Main Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 3. Basic Information Card */}
        <div className="border border-[#DAD8D8] rounded-md p-6 space-y-6 bg-white">
          <div className="flex justify-between items-center">
            <h3 className="text-[#000000] text-lg font-medium">Basic Information</h3>
            <Button
              type="button"
              variant="secondary"
              className="bg-[#F0F0F0] text-[#0E1112] hover:bg-[#e4e4e4] gap-2 h-9 px-3"
            >
              <SquarePen className="h-4 w-4" />
              <span>Edit</span>
            </Button>
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
                      placeholder="Sarah"
                      className="pl-9"
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
                      placeholder="Emad"
                      className="pl-9"
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
                      placeholder="Sarahem@gmail.com"
                      className="pl-9"
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
                      placeholder="+20 112 345 9876"
                      className="pl-9"
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

        {/* 4. Language Card */}
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

        {/* 5. Notification Preference Card */}
        <div className="border border-[#DAD8D8] rounded-md p-6 space-y-6 bg-white">
          <div>
            <h3 className="text-[#000000] text-lg font-medium">Notification Preference</h3>
            <p className="text-[#0000007A] font-normal text-sm">
              Manage notification based on your preference
            </p>
          </div>

          {/* Group 1: Order & Delivery Updates */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-900">
              Order & Delivery Updates
            </h4>
            <div className="bg-[#F7FCFF] rounded-sm p-4 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200/60">
                <span className="text-sm font-medium text-gray-700">Order Confirmation</span>
                <button
                  type="button"
                  onClick={() => toggleSwitch('orderConfirmation')}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    notifications.orderConfirmation ? 'bg-[#014162]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      notifications.orderConfirmation ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-gray-200/60">
                <span className="text-sm font-medium text-gray-700">Order Shipped</span>
                <button
                  type="button"
                  onClick={() => toggleSwitch('orderShipped')}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    notifications.orderShipped ? 'bg-[#014162]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      notifications.orderShipped ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-gray-200/60">
                <span className="text-sm font-medium text-gray-700">Delivery Updates</span>
                <button
                  type="button"
                  onClick={() => toggleSwitch('deliveryUpdates')}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    notifications.deliveryUpdates ? 'bg-[#014162]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      notifications.deliveryUpdates ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Out-of-Stock Alerts</span>
                <button
                  type="button"
                  onClick={() => toggleSwitch('outOfStockAlerts')}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    notifications.outOfStockAlerts ? 'bg-[#014162]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      notifications.outOfStockAlerts ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Group 2: Account & Reminders */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-900">
              Account & Reminders
            </h4>
            <div className="bg-[#F7FCFF] rounded-sm p-4 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200/60">
                <span className="text-sm font-medium text-gray-700">Cart Reminders</span>
                <button
                  type="button"
                  onClick={() => toggleSwitch('cartReminders')}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    notifications.cartReminders ? 'bg-[#014162]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      notifications.cartReminders ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-gray-200/60">
                <span className="text-sm font-medium text-gray-700">
                  Payment & Billing Notifications
                </span>
                <button
                  type="button"
                  onClick={() => toggleSwitch('paymentBilling')}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    notifications.paymentBilling ? 'bg-[#014162]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      notifications.paymentBilling ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Account Security Alerts
                </span>
                <button
                  type="button"
                  onClick={() => toggleSwitch('accountSecurity')}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    notifications.accountSecurity ? 'bg-[#014162]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      notifications.accountSecurity ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Group 3: Communication Channels */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-900">
              Communication Channels
            </h4>
            <div className="bg-[#F7FCFF] rounded-sm p-4 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200/60">
                <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                <button
                  type="button"
                  onClick={() => toggleSwitch('emailNotifications')}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    notifications.emailNotifications ? 'bg-[#014162]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      notifications.emailNotifications ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-gray-200/60">
                <span className="text-sm font-medium text-gray-700">SMS Notifications</span>
                <button
                  type="button"
                  onClick={() => toggleSwitch('smsNotifications')}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    notifications.smsNotifications ? 'bg-[#014162]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      notifications.smsNotifications ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Push Notifications</span>
                <button
                  type="button"
                  onClick={() => toggleSwitch('pushNotifications')}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    notifications.pushNotifications ? 'bg-[#014162]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      notifications.pushNotifications ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}